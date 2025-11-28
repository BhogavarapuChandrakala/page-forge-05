import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    port: 5174,
    strictPort: true,   // ← IMPORTANT: Do NOT change port
    host: "localhost",  // ← Only localhost (removes network links)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
