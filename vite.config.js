import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  ...(process.env.NODE_ENV === 'development'
    ? {
      define: {
        global: {},
      },
    }
    : {}),
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    // alias: {
    //   "./runtimeConfig": "./runtimeConfig.browser",
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
  },
});
