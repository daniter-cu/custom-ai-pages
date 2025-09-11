import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set base path based on environment variable
// Set USE_GH_PAGES=true to use "/custom-ai-pages/", otherwise use empty string
//"/custom-ai-pages/"
const BASE = process.env.USE_GH_PAGES === "true" ? "/" : "";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: BASE,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
