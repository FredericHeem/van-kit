import { initialScreenFadeOut } from "../../utils/initialScreenFadeOut";
import { createContext } from "../../utils/context";

import { layoutDefault } from "./layoutDefault";
import { Router } from "../../utils/router";
import { createRoutes } from "./routes";

initialScreenFadeOut();

const context = createContext({
  config: { title: "Story Book", base: "/storybook" },
});

Router({
  context,
  routes: createRoutes({ context }),
  LayoutDefault: layoutDefault(context),
});
