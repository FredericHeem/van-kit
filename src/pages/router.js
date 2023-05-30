import UniversalRouter from "universal-router";
import tap from "rubico/tap";

import tryCatch from "rubico/tryCatch";
import pipe from "rubico/pipe";
import defaultsDeep from "rubico/x/defaultsDeep";

import { NotFound } from "./notFound";

export const Router = ({ context, routes, LayoutDefault }) => {
  const { tr, config } = context;
  const universalRouter = new UniversalRouter(routes);

  const onLocationChange = pipe([
    tryCatch(
      pipe([
        tap(() => {
          console.log("pathname", location.pathname);
        }),
        () =>
          universalRouter.resolve({
            pathname: location.pathname.replace(config.base, ""),
            // query: parse(location.search),
          }),
      ]),
      (error) => ({
        title: tr("Page Not Found"),
        component: NotFound(context),
      })
    ),
    defaultsDeep({ Layout: LayoutDefault }),
    ({ title, component, Layout }) => {
      const app = document.getElementById("app");
      app.replaceChildren(Layout({ component }));
      document.title = `${title} - ${config.title}`;
    },
  ]);

  window.addEventListener("popstate", onLocationChange);
  window.history.pushState = new Proxy(window.history.pushState, {
    apply: (target, thisArg, argArray) => {
      target.apply(thisArg, argArray);
      onLocationChange();
    },
  });

  onLocationChange();
  return universalRouter;
};
