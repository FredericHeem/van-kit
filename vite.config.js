import { defineConfig, normalizePath } from "vite";
import pkg from "./package.json";

import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";
import linaria from "@linaria/vite";

const base = "/";

const pages = createPages([
  {
    name: "landing",
    filename: "index.html",
    entry: "/src/pages/landing/entry.js",
    data: {
      title: "Landing page",
      description: "Landing",
    },
  },
  {
    name: "admin",
    filename: "admin.html",
    entry: "/src/pages/admin/entry.js",
    data: {
      title: "Admin",
      description: "Admin Area",
    },
  },
]);

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base,
    server: {
      open: true,
      proxy: {
        "/api/v1/": {
          target: "http://localhost:9000",
          changeOrigin: true,
        },
      },
    },
    define: {
      NODE_ENV: JSON.stringify(
        command === "serve" ? "development" : "production"
      ),
      __VERSION__: JSON.stringify(pkg.version),
    },
    plugins: [
      createMpaPlugin({
        template: "src/pages/template.html",
        pages,
        htmlMinify: true,
      }),
      linaria(),
    ],
  };
});
