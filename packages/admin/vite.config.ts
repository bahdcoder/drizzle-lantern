import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    manifest: true,
    outDir: path.resolve(
      __dirname,
      "..",
      "drizzle-lantern",
      "assets"
    ),
    rollupOptions: {
      input: path.resolve(__dirname, "src", "main.tsx"),
    },
  },
});
