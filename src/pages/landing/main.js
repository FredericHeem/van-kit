import { Input } from "../../components/input/input";

export const Main = (context) => {
  const { tr, van } = context;
  const { main, h1, button } = van.tags;
  const input = Input(context);
  return () =>
    main(
      h1(tr("Main Area")),
      button(
        {
          onclick: () => {
            history.pushState({}, null, "/login");
          },
        },
        tr("Login")
      ),
      input({ label: "my input" })
    );
};
