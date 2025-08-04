# Init project

```sh
npm create vite@latest .
```

## Setup tailwind

https://tailwindcss.com/docs/installation/using-vite

```sh
npm install tailwindcss @tailwindcss/vite
```

Modify vite.config.ts

## Setup for TS

```sh
 npm install -D @types/node
```

## Setup @

Thi setup is need by Shadcn

Modify vite.config.ts

```js
resolve: {
  alias: {
    "@": resolve(__dirname, "./src"),
  },
},
```

Modify tsconfig.json and tsconfig.app.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Setup Shadcn

```sh
npx shadcn@latest init

npx shadcn@latest add button label input
```
