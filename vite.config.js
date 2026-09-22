import preact from "@preact/preset-vite"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss(),],

  "resolve": {
    "alias": {
      "@src": path.resolve(import.meta.dirname, "./src"),
      "@app": path.resolve(import.meta.dirname, "./src/app"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@img": path.resolve(import.meta.dirname, "./src/assets/img"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@sections": path.resolve(import.meta.dirname, "./src/sections"),
    },
  }
})
