import van from "../../van";
import { initialScreenFadeOut } from "../../utils/initialScreenFadeOut";

import { layoutDefault } from "./layoutDefault";
import { Router } from "../router";
import { createRoutes } from "./routes";

import { header } from "./header";
import { footer } from "./footer";

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
  LayoutDefault: layoutDefault(context, { header, footer }),
});
