# Setup vitest

```sh
npm i -D vitest
npm i -D @testing-library/react @testing-library/jest-dom jsdom

```

Add vitest.config.js based on vite.config.ts

```js
setupFiles: "./src/test/setup.ts",
```

Modify tsconfig.app.json
This configuration allows you to use vitest functions in spec files without importing them.

```json
"types": [
    "node",
    "vite/client",
    "vitest/globals",
    "@testing-library/jest-dom"
]
```
