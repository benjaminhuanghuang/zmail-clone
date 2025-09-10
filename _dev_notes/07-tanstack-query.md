# Tanstack query

```sh
npm i @tanstack/react-query @tanstack/react-query-devtools

```

Main.ts

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>;
```

```js
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], // unique key for caching
    queryFn: fetchPosts, // function that fetches data
  });
}
```
