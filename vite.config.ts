import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  appType: "mpa",
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        furniture: resolve(__dirname, "furniture.html"),
        contact: resolve(__dirname, "contact.html")
      }
    }
  }
});
