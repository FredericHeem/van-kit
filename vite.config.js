import { defineConfig, normalizePath } from "vite";
import pkg from "./package.json";

import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";

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
        /**
         * Customize the history fallback rewrite rules for `dev server`.
         * If you config your pages as above, this rewrite rules will be automatically generated.
         * Otherwise you should manually write it, which will overwrite the default.
         */
        // rewrites: [
        //   {
        //     from: new RegExp(
        //       normalizePath(`/${base}/(landing|banana|strawberries|home)`)
        //     ),
        //     to: (ctx) => normalizePath(`/${base}/${ctx.match[1]}.html`),
        //   },
        // ],
        /**
         * Customize the history fallback rewrite rules for `preview server`.
         * This option is almost the same with `rewrites`.
         */
        previewRewrites: [
          // If there's no index.html, you need to manually set rules for history fallback like:
          { from: /.*/, to: "/index.html" },
        ],
      }),
    ],
  };
});
