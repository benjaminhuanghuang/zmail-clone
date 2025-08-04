import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/providers/ThemeProvider";
import MailPage from "@/pages/MailPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
