import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";

import svgr from "vite-plugin-svgr";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
});
