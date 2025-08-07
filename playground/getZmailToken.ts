const API_HOST = "https://ngxpls-acprod.asynccomm.zoom.us";

function generateRandomString() {
  return `web_prefetch_${
    crypto.randomUUID?.() ??
    Date.now().toString(36) + Math.random().toString(36).slice(2)
  }`;
}

async function prefetchZmailToken() {
  return await fetch(
    `${API_HOST}/nws/common/2.0/eak?reqId=${generateRandomString()}`,
    {
      credentials: "include",
    }
  );
}

async function main() {
  const res = await prefetchZmailToken();

  console.log("Prefetched Zmail token:", res);
  if (res.ok) {
    const result = await res.json();
    console.log("The res json:", result);
    if (result.code === 0 && result.result) {
      const eak = result.result;
      console.log("Zmail token fetched successfully:", eak);
    }
  } else {
    console.error(
      "Failed to prefetch Zmail token:",
      res.status,
      res.statusText
    );
  }
}

main();
