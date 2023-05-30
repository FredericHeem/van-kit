import { Main } from "./main";
import { FormLogin } from "../formLogin";

export const createRoutes = ({ context }) => [
  {
    path: "",
    action: (routerContext) => ({
      routerContext,
      title: "Home",
      component: Main(context),
    }),
  },
  {
    path: "/login",
    action: (routerContext) => ({
      routerContext,
      title: "Login",
      component: FormLogin(context),
    }),
  },
];
