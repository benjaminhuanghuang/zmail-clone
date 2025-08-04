import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
