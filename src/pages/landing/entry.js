import van from "../van";

import { LayoutDefault } from "./layoutDefault";
import { Router } from "../router";
import { createRoutes } from "./routes";
import { Header } from "./header";
import { Footer } from "./footer";
import { createTheme } from "../../theme";

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
  theme: createTheme({}),
  config: { title: "Landing", base: "" },
};

Router({
  context,
  routes: createRoutes({ context }),
  LayoutDefault: LayoutDefault(context, { Header, Footer }),
});
