import createDOMPurify from "dompurify";
import { encode, decode } from "js-base64";
import { keys } from "lodash";

export function generateRandomString(length: number, prefix = "") {
  let result = prefix;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = prefix.length; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function base64Encode(str: string) {
  return encode(str);
}

export function base64Decode(str: string) {
  return decode(str);
}

export function extFromFileName(filename: string): string {
  if (filename.length === 0) return "";

  const pos: number = filename.lastIndexOf(".");
  if (pos === -1) return "";

  return filename.substring(pos + 1);
}

export function textToHtml(text: string) {
  // Escape text
  let div: HTMLElement | null = document.createElement("div");
  div.textContent = text;
  const escapedText = div.innerHTML;
  div = null; // avoid memory leak

  // Replace new lines
  const convertedText = escapedText.replaceAll(/\n/g, " <br/>");
  return `<html><body>${convertedText}</body></html>`;
}

/**
 * The str content may contain emoji. See: https://dev.to/acanimal/how-to-slice-or-get-symbols-from-a-unicode-string-with-emojis-in-javascript-lets-learn-how-javascript-represent-strings-h3a
 * @param str
 * @param start
 * @param length
 * @return {string|*}
 */
export function safeSubstr(str: string, start: number, length: number) {
  const codePointArr = Array.from(str);
  if (codePointArr.length < length) {
    return str;
  }
  return codePointArr.slice(start, length).join("");
}

/**
 * The str content may contain emoji. See: https://dev.to/acanimal/how-to-slice-or-get-symbols-from-a-unicode-string-with-emojis-in-javascript-lets-learn-how-javascript-represent-strings-h3a
 * @param str
 * @return {number}
 */
export function safeStrlen(str: string) {
  return Array.from(str).length;
}
export const ALLOWED_URI_REGEXP =
  /^(?:(?:https|http|mailto|tel|callto|zoomphonecall|zmdf|zoomus|cid):|(?:data:image\/)|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i;
export function purifyHtml(html: string, options = {}) {
  const defaultOptions = { ALLOWED_URI_REGEXP };

  if (!html) return "";
  const DOMPurify = createDOMPurify(window);
  return DOMPurify.sanitize(html, { ...defaultOptions, ...options });
}

export function getDefaultHtml(config?: {
  fontSize?: string;
  fontFamily?: string;
}) {
  if (!config) return `<p></p>`;
  const { fontSize = "14px", fontFamily = "arial, sans-serif" } = config;
  return `<p style="font-size: ${fontSize}; font-family: ${fontFamily};"></p>`;
}

export const sanitizeHTML2String = (s = "") => {
  // https://stackoverflow.com/a/48226843
  // https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding-rules-summary
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return s.replace(reg, (match) => map[match as keyof typeof map]);
};

export const string2SanitizedHTML = (s = "") => {
  const map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
    "&#x2F;": "/",
    "&#x2f;": "/",
  };
  const reg = new RegExp(`(${keys(map).join("|")})`, "gi");
  return s.replace(reg, (match) => map[match as keyof typeof map]);
};
