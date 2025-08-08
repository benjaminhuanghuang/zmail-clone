/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { generateRandomString } from "@/utils/stringUtils";
import { Err, Ok } from ".";

export function composeMixedBody(mixedBodyList: MixedBodyList) {
  const boundary = generateBoundaryId();
  let multipartBody = "";
  mixedBodyList.forEach((mixedBody) => {
    const { headers, body } = mixedBody;
    multipartBody += `--${boundary}\n`;

    if (Object.values(headers).length) {
      for (const key in headers) {
        const value = headers[key];
        multipartBody += `${key}: ${value}\n`;
      }
      multipartBody += "\n";
    }

    if (body) {
      multipartBody += `${body}\n\n`;
    }
  });

  multipartBody += `--${boundary}--\n`;

  return {
    multipartBody,
    boundary,
  };
}

export function generateBoundaryId() {
  return `${generateRandomString(8)}-${generateRandomString(
    4
  )}-${generateRandomString(4)}-${generateRandomString(12)}`.toUpperCase();
}

export function generateGUID() {
  return `${generateRandomString(8)}-${generateRandomString(
    4
  )}-${generateRandomString(4)}-${generateRandomString(
    4
  )}-${generateRandomString(12)}`.toUpperCase();
}

export function handleMixedResponse(
  response: AxiosResponse,
  resolve: Function
) {
  const headers = response.headers;
  const content = response.data;
  const contentTypeHeader = headers["content-type"];
  const { contentType, boundary } = parseBoundary(contentTypeHeader);
  if (contentType.toLowerCase().startsWith("application/json")) {
    resolve(Ok(response.data));
  } else {
    assert(
      boundary,
      `MIXED: mixed contentType, missing boundary id ${contentTypeHeader}`
    );
    const parts = splitMixedHTTPContent(content, boundary!);
    assert(parts.length === 1, "MIXED: only support one mixed body");

    const { httpCode, jsonBody, rawBody, header } = parseMixedHTTPContent(
      parts[0]!
    );

    let body: any;
    if (header["Content-Type"]?.toLowerCase().startsWith("application/json")) {
      body = jsonBody;
    } else {
      body = rawBody;
    }

    if (httpCode >= 200 && httpCode <= 299) {
      resolve(Ok(body));
    } else {
      resolve(Err(new Error(`HTTP ${httpCode}, body ${rawBody}`)));
    }
  }
}

export type MixedBodyList = MixedBody[];
export type MixedBody = {
  headers: { [keyof: string]: string };
  body: string;
};

interface ParsedData {
  meta: { [key: string]: string };
  header: { [key: string]: string };
  httpCode: number;
  rawBody: string;
  jsonBody: any;
}

export function parseBoundary(contentTypeString: string): {
  contentType: string;
  boundary: string | null;
} {
  const parts = contentTypeString.split(";");
  const boundary = parts[1]?.split("=")[1]!;
  return {
    contentType: parts[0]!,
    boundary,
  };
}

export function splitMixedHTTPContent(
  response: string,
  boundary: string
): string[] {
  const boundaryDelimiter = `--${boundary}`;
  const endDelimiter = `--${boundary}--`;

  let content = response;

  // remove endDelimiter
  if (response.endsWith(endDelimiter)) {
    content = response.slice(0, -endDelimiter.length);
  }

  // Split the response by boundary
  return content.split(boundaryDelimiter).filter((s) => !!s);
}

const statusCodeRegex: RegExp = /^HTTP\/[\d.]+\s+(\d+)/;

export function parseMixedHTTPContent(input: string): ParsedData {
  const lines = input.split("\r\n");
  assert(
    lines.length > 0,
    `parseHttpMixedResponse failed, lines is empty. input: ${input}`
  );
  let meta: { [key: string]: string } = {};
  let header: { [key: string]: string } = {};
  let httpCode = 0;
  let rawBody: string = "";
  let jsonBody: any = {};

  const headerStart = lines.findIndex((line) => statusCodeRegex.test(line));
  let headerEnd = -1;

  if (headerStart > -1) {
    headerEnd = lines.slice(headerStart).findIndex((line) => line.length === 0);
    if (headerEnd > -1) {
      headerEnd += headerStart + 1;
    }
  }

  if (headerStart > 1) {
    // parse meta data
    let metaLines = lines.slice(0, headerStart);
    if (metaLines.length > 0) {
      meta = parseMixedMeta(metaLines);
    } else {
      console.warn(
        `http header not at begin of body, but not found meta lines at begin of mixed body input:${input}`,
        lines,
        `headerRange: ${headerStart}-${headerEnd}`
      );
    }
  }

  if (headerStart > 1 && headerEnd > headerStart) {
    // parse http headers, first line is http status line
    let headerLines = lines.slice(headerStart, headerEnd);
    assert(headerLines.length > 0, 'mix body header lines can"t be empty');
    const { httpCode: _code, header: _header } = parseMixedHeader(headerLines);
    httpCode = _code !== -1 ? _code : -1;
    header = Object.keys(_header).length > 0 ? _header : {};
  }

  if (headerEnd < lines.length - 1) {
    const bodyLines = lines.slice(headerEnd);
    const { rawBody: _rawBody, jsonBody: _jsonBody } =
      parseMixedBody(bodyLines);
    rawBody = _rawBody ?? "";
    jsonBody = _jsonBody ?? null;
  }

  return {
    meta,
    header,
    httpCode,
    rawBody,
    jsonBody,
  };
}

function parseMixedMeta(metaLines: string[]) {
  const meta: { [key: string]: string } = {};
  metaLines
    .filter((meta) => meta && meta.includes(":"))
    .map(parseKeyValue)
    .forEach(({ key, value }) => {
      if (key) {
        meta[key] = value;
      } else {
        console.warn("unsupported meta header kv", { key, value });
      }
    });
  return meta;
}

function parseMixedHeader(headerLines: string[]) {
  let httpCode = -1;
  const header: { [key: string]: string } = {};
  headerLines
    .filter((headerLine) => headerLine)
    .map((headerLine, index) => {
      if (index === 0) {
        const matchResult: RegExpMatchArray | null =
          statusCodeRegex.exec(headerLine);
        if (matchResult && matchResult[1]) {
          httpCode = parseInt(matchResult[1]);
        }
      } else {
        return parseKeyValue(headerLine);
      }
    })
    .filter((kv) => !!kv)
    .forEach((kv) => {
      const { key, value } = kv!;
      if (key) {
        header[key] = value;
      }
    });

  return {
    httpCode,
    header,
  };
}

function parseMixedBody(bodyLines: string[]) {
  let jsonBody: any;
  const rawBody = bodyLines.join("");
  try {
    jsonBody = JSON.parse(rawBody);
  } catch {
    console.debug(`raw body is not a json ${rawBody}`);
  }

  return {
    jsonBody,
    rawBody,
  };
}

export function parseKeyValue(str: string): { key: string; value: string } {
  assert(
    str.indexOf(":") > -1,
    `parseKeyValue must contain one ":", but got ${str}`
  );
  const parts = str.split(": ");
  return {
    key: parts[0] ?? "",
    value: parts[1] ?? "",
  };
}
