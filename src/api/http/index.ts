import axios, { type InternalAxiosRequestConfig } from "axios";
import { configureHeader, configureURL, configureToken } from "./interceptor";
import { getErrorHandler, redirectToSignIn } from "../auth";
import { isWebTokenAPI } from "../apiinfo";
import { initToken } from "../auth";

axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    await configureToken(config);
    // Do something before request is sent
    config = configureHeader(config);
    config = configureURL(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

let isRefreshingToken = false;

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const handler = getErrorHandler();
    if (handler) {
      handler(error);
    }
    // if api return 401 token expiration, we need to refresh token
    if (error.response && error.response.status === 401 && !isRefreshingToken) {
      if (isWebTokenAPI(error.config.url)) {
        // session expiration, need to re-login
        redirectToSignIn();
      } else {
        // token expiration, need to refresh token.
        isRefreshingToken = true;
        // if refresh token failed, initAPIToken will redirect to sign in page
        await initToken();
        isRefreshingToken = false;
        // refresh token success.
        return Promise.resolve(axios(error.config));
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export {
  GET,
  POST,
  MIXED,
  DELETE,
  PATCH,
  PUT,
  Ok,
  Err,
  SIMPLE_MIXED,
  type IResponse,
} from "./request";
