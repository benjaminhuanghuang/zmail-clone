/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosRequestConfig, type Method } from "axios";
import {
  composeMixedBody,
  handleMixedResponse,
  type MixedBodyList,
} from "./mixed";

export function GET<T>(
  path: string,
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<IResponse<T>> {
  return new Promise((resolve) => {
    const config: AxiosRequestConfig = {
      params,
      ...options,
    };

    axios
      .get<T>(path, config)
      .then((result) => {
        resolve(Ok(result.data));
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          resolve(Err(new Error("Request aborted")));
        } else {
          resolve(Err(err));
        }
      });
  });
}

export function POST<T>(
  path: string,
  data: any = {},
  params: any = {},
  options: AxiosRequestConfig = {},
  customizeHandleErr?: (arg: any) => any
): Promise<IResponse<T>> {
  return new Promise((resolve) => {
    axios
      .post<T>(path, data, { params, ...options })
      .then((result) => resolve(Ok(result.data)))
      .catch((err) => {
        if (customizeHandleErr) {
          resolve(customizeHandleErr(err));
        }
        resolve(handleAxiosError(err));
      });
  });
}

export function PATCH<T>(
  path: string,
  data: any = {},
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<IResponse<T>> {
  return new Promise((resolve) => {
    axios
      .patch<T>(path, data, { params, ...options })
      .then((result) => resolve(Ok(result.data)))
      .catch((err) => resolve(handleAxiosError(err)));
  });
}

export function PUT<T>(
  path: string,
  data: any = {},
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<IResponse<T>> {
  return new Promise((resolve) => {
    axios
      .put<T>(path, data, { params, ...options })
      .then((result) => resolve(Ok(result.data)))
      .catch((err) => resolve(handleAxiosError(err)));
  });
}

export function DELETE<T>(
  path: string,
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<IResponse<T>> {
  return new Promise((resolve) => {
    axios
      .delete<T>(path, { params, ...options })
      .then((result) => resolve(Ok(result.data)))
      .catch((err) => resolve(handleAxiosError(err)));
  });
}

export function MIXED<T>(
  path: string,
  mixedBodyList: MixedBodyList,
  params: any = {},
  method: Method = "POST",
  options: AxiosRequestConfig = {}
) {
  const { multipartBody, boundary } = composeMixedBody(mixedBodyList);
  return new Promise((resolve) => {
    axios<T>({
      method,
      headers: {
        "Content-Type": `multipart/related; boundary="${boundary}"`,
        ...options.headers,
      },
      url: path,
      data: multipartBody,
      params,
      ...options,
    })
      .then((response) => handleMixedResponse(response, resolve))
      .catch((err) => resolve(handleAxiosError(err)));
  }) as Promise<IResponse<T>>;
}
export function SIMPLE_MIXED<T>(
  path: string,
  rawPayload: string,
  boundary: string,
  params: any = {},
  method: Method = "POST",
  options: AxiosRequestConfig = {}
) {
  return new Promise((resolve) => {
    axios<T>({
      method,
      headers: {
        "Content-Type": `multipart/related; boundary="${boundary}"`,
        ...options.headers,
      },
      url: path,
      data: rawPayload,
      params,
      ...options,
    })
      .then((response) => handleMixedResponse(response, resolve))
      .catch((err) => resolve(handleAxiosError(err)));
  }) as Promise<IResponse<T>>;
}
export function handleAxiosError(err: unknown): IResponse<never> {
  if (axios.isCancel(err)) {
    return Err(new Error("Request aborted"));
  }

  if (axios.isAxiosError(err)) {
    return Err(new Error(err.response?.data?.message || err.message));
  }
  return Err(err as Error);
}

type ErrorResponse = [Error, undefined];
type NormalResponse<T> = [undefined, T];
export type IResponse<T> = ErrorResponse | NormalResponse<T>;

export function Ok<T>(value: T): NormalResponse<T> {
  return [undefined, value];
}

export function Err(value: Error): ErrorResponse {
  return [value, undefined];
}
