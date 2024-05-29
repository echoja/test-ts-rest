import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs"],
  clean: true,
  minify: true,
  sourcemap: true,
  entryPoints: ["src/index.ts"],
  ignoreWatch: [
    "**/.git",
    "**/.nyc_output",
    "**/.svelte",
    "**/coverage",
    "**/dist",
    "**/node_modules",
    "**/public",
    "**/tmp",
    "**/vendor",
  ],
});
