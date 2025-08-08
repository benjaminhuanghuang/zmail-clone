import type { AxiosResponse } from "axios";
import URLS from "./apiinfo";
import { GET, POST } from "./http";

let ZMAIL_TOKEN: string | null = null;

const UID_KEY = "QS_UID";
const STY_KEY = "QS_STY";

export function initToken() {
  initZmailToken();
}

export function initZmailToken() {
  return getEak().then((eakResult) => {
    const [eakError, eakData] = eakResult;

    if (eakError) {
      redirectToSignIn();
    } else {
      if (eakData.code || !eakData.result) {
        redirectToSignIn();
      } else {
        ZMAIL_TOKEN = eakData.result;
      }
    }
  });
}

export type EakResponse = { code: number; msg?: string; result?: string };

export function getEak() {
  return GET<EakResponse>(URLS.getEak.name);
}

export function redirectToSignIn() {
  window.location.href = getSignInURL();
}

export function getSignInURL() {
  const uid = window.localStorage.getItem(UID_KEY);
  const sty = window.localStorage.getItem(STY_KEY);
  const continueURL = window.location.href;
  const domain = import.meta.env.VITE_ZOOM_DOMAIN;
  if (uid !== null && sty !== null) {
    const url = `${domain}/quick_signin?continue=${continueURL}&uid=${uid}&sty=${sty}`;
    return url;
  } else {
    const url = `${domain}/signin?continue=${continueURL}`;
    return url;
  }
}

export async function signOut() {
  try {
    cleanLocalData();
    await revokeZmailToken();
    await zmailLogout();
  } finally {
    redirectToSignIn();
  }
}

function cleanLocalData() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function revokeZmailToken() {
  if (ZMAIL_TOKEN) {
    revokeEak(ZMAIL_TOKEN);
    ZMAIL_TOKEN = "";
  }
}

export function zmailLogout() {
  return POST(URLS.webLogout.name);
}

export function revokeEak(eak: string) {
  return POST(URLS.revokeEak.name, { data: eak });
}

export function getHTTPEnv() {
  return {
    ZMAIL_TOKEN,
  };
}

export function isZmailTokenReady() {
  return !!ZMAIL_TOKEN;
}

let responseErrorHandler: ErrorHandler;
type ErrorHandler = (response: AxiosResponse) => AxiosResponse;

export function setErrorHandler(errorHandler: ErrorHandler) {
  responseErrorHandler = errorHandler;
}

export function getErrorHandler() {
  return responseErrorHandler;
}
