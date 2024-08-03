import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    outDir: Path.resolve(
      __dirname,
      "..",
      "drizzle-lantern",
      "assets"
    ),
    rollupOptions: {
      input: Path.resolve(__dirname, "src", "main.tsx"),
    },
  },
});
