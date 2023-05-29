import { Header } from "./header";
import { Footer } from "./footer";

export const LayoutDefault = (context) => {
  const { van } = context;
  const { div } = van.tags;
  return ({ component }) =>
    div(Header(context)(), component(), Footer(context)());
};
