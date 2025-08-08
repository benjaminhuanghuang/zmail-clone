import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/zmail": {
        target: "https://ngxpls-acqa.acqa.zoomdev.us",
        changeOrigin: true,
      },
      "/batch": {
        target: "https://ngxpls-acqa.acqa.zoomdev.us",
        changeOrigin: true,
      },
      "/upload": {
        target: "https://ngxpls-acqa.acqa.zoomdev.us",
        changeOrigin: true,
      },
      "/zpeople": {
        target: "https://ngxpls-acqa.acqa.zoomdev.us",
        changeOrigin: true,
      },
    },
    host: "127.0.0.1",
    allowedHosts: ["zmail.zoom.us"],
  },
});
