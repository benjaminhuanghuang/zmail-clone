# Mail list

```sh

npx shadcn@latest add tabs  checkbox scroll table
```

## API

API_HOST

```js
async function prefetchZmailToken() {
  const API_HOST = window.__ZM_RUNTIME_ENV.API_HOST;
  return await fetch(
    `${API_HOST}/nws/common/2.0/eak?reqId=${generateRandomString()}`,
    {
      credentials: "include",
    }
  );
}
```

```js
const promise = fetch(
  `${API_HOST}/zmail/v1/users/me/threads?labelIds=${labelId}&pageToken=&maxResults=20&fields=threads.id,threads.historyId,nextPageToken&includeSpamTrash=false&reqId=${generateRandomString()}`,
  {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${eak}`,
    },
  }
);
```
