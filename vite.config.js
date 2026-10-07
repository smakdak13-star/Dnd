import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import fs from "fs";
import path from "path";

// Плагин для копирования собранного файла в корень
const copyToRoot = {
  name: 'copy-to-root',
  closeBundle() {
    const src = path.resolve('dist/index.html');
    const dest = path.resolve('game.html');
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log('\n✅ Файл скопирован в game.html (корень проекта)');
    }
  }
};

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), copyToRoot],
  base: './',
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
