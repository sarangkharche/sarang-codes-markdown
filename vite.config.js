import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { inject } from '@vercel/analytics';

inject();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          highlightjs: ["highlight.js"],
        },
      },
    },
    terserOptions: {
      compress: {
        passes: 10,
      },
    },
  },
});
