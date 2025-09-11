# Mail list

## Zmail

```js
// mail:labelId view
const Label = lazyLoad(() => import("@/views/Mail/Home/Label"));
```

apps/web/src/views/Mail/Home/Label/index.tsx

```js
<MailList />
```

apps/web/src/components/Mail/MailList/index.tsx

## Implementation

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
