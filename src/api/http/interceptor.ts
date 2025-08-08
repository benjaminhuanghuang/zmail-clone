import { type InternalAxiosRequestConfig } from "axios";
import { generateRandomString } from "@/utils/stringUtils";
import Cookies from "js-cookie";
import {
  type API_NAME,
  getAPIInfo,
  isNeedAuth,
  isWithCredentials,
  isWebTokenAPI,
  isZmailAPI,
} from "../apiInfo";
import {
  getHTTPEnv,
  isZmailTokenReady,
  redirectToSignIn,
  initToken,
} from "../auth";

/*
  Set config.headers["Authorization"] and config.withCredentials
 */
export const configureHeader = (config: InternalAxiosRequestConfig) => {
  const apiName = config.url as API_NAME;
  const { ZMAIL_TOKEN } = getHTTPEnv();
  if (apiName) {
    const needAuth = isNeedAuth(apiName);
    if (needAuth) {
      if (isZmailAPI(apiName)) {
        if (ZMAIL_TOKEN) {
          config.headers["Authorization"] = ZMAIL_TOKEN.startsWith("Bearer")
            ? ZMAIL_TOKEN
            : `Bearer ${ZMAIL_TOKEN}`;
        } else {
          redirectToSignIn();
        }
      } else {
        if (!apiName.startsWith("http")) {
          throw new Error(
            `Unable to determine whether it is ZMAIL API a or Web API b based on the api(${apiName})`
          );
        }
      }
    }
    config.withCredentials = isWithCredentials(apiName);
    return config;
  } else {
    throw new Error("request URL is missing");
  }
};

export const configureURL = (config: InternalAxiosRequestConfig) => {
  const apiName = config.url as API_NAME;
  const isRetryRequest = apiName.startsWith("http");
  if (!apiName) {
    throw new Error(`Failed to configureURL, request URL is missing`);
  }

  // add host to url by api info host type
  const apiItem = getAPIInfo(apiName);
  if (!apiItem && !isRetryRequest) {
    throw new Error(
      `Failed to configureURL, can't find api info for ${apiName}`
    );
  }
  // transform url for api
  if (apiItem?.urlBuilder) {
    console.debug(config);
    config.url = apiItem.urlBuilder(apiItem.path, config.params, config.data);
  } else if (!isRetryRequest) {
    config.url = apiItem.path;
  }

  // transform params for api
  if (apiItem?.requestParamsBuilder) {
    config.params = apiItem.requestParamsBuilder(config.params);
  }

  if (apiItem?.server === "ZMAIL") {
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    config.url = `${import.meta.env.VITE_API_HOST}${config.url}`;
  } else if (apiItem?.server === "WEB") {
    config.url = `${import.meta.env.VITE_ZOOM_DOMAIN}${config.url}`;
  } else if (apiItem?.server === "SCHEDULER") {
    config.url = `${import.meta.env.VITE_SCHEDULER_DOMAIN}${config.url}`;
  } else if (!isRetryRequest) {
    throw new Error(
      `Failed to configureURL, not support server type ${apiItem.server}`
    );
  }

  if (!config.params) {
    config.params = {};
  }
  config.params.reqId = `web${generateRandomString(16)}`;
  Cookies.set("x-zm-trackingid", config.params.reqId);
  return config;
};

export const configureToken = async (config: InternalAxiosRequestConfig) => {
  const apiName = config.url as API_NAME;
  if (!isWebTokenAPI(apiName) && !isZmailTokenReady()) {
    await initToken();
  }
  return config;
};
