import "./style.css";
import { LayoutDefault } from "./layoutDefault";

import { Router } from "./router";
import { createRoutes } from "./routes";

const initialScreenFadeOut = () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.classList.add("m-fadeOut");
  }
};

initialScreenFadeOut();

const context = {
  van,
  tr: (text) => text,
  theme: { palette: {} },
  config: { title: "My App", base: "" },
};

Router({
  context,
  routes: createRoutes({ context }),
  LayoutDefault,
});
