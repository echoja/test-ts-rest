import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs"],
  clean: true,
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
    // 현재 직접적으로 client 및 common 폴더를 참조하고 있으므로 output 폴더를 무시
    "../../shared/common/output/**",
    "../../shared/client/output/**",
  ],
  watch: ["./src"],
});
