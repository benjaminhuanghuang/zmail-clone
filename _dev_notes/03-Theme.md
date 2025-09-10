# Theme

```sh
npx shadcn@latest add dropdown-menu
```

Copy the code from https://ui.shadcn.com/docs/dark-mode/vite

src/providers/ThemeProvider.tsx
src/providers/ThemeContext.tsx
src/components/ThemeToggle.tsx

Fix error "Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)""

- Move ThemeContext out of ThemeProvider
