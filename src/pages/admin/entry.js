import van from "../../van";
import { initialScreenFadeOut } from "../../utils/initialScreenFadeOut";

import { LayoutDefault } from "./layoutDefault";
import { Router } from "../router";
import { createRoutes } from "./routes";

import { Header } from "./header";
import { Footer } from "./footer";

initialScreenFadeOut();

const context = {
  van,
  tr: (text) => text,
  theme: { palette: {} },
  config: { title: "My App", base: "/admin" },
};

Router({
  context,
  routes: createRoutes({ context }),
  LayoutDefault: LayoutDefault(context, { Header, Footer }),
});
