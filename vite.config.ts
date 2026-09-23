import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      tsConfigPaths: true,
    }),
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      shared: import.meta.dirname + '/src/shared',
      app: import.meta.dirname + '/src/app',
      widgets: import.meta.dirname + '/src/widgets',
      entities: import.meta.dirname + '/src/entities',
      features: import.meta.dirname + '/src/features',
      pages: import.meta.dirname + '/src/pages',
      routes: import.meta.dirname + '/src/routes',
    }
  }
});
