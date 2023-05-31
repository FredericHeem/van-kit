import Input from "./input";

export default (context) => {
  const { tr, van } = context;
  const { div, h3, h2 } = van.tags;
  const input = Input(context);
  return () =>
    div(
      h2(tr("Input Examples")),
      h3("Standard"),
      div(input({ id: "my-input", label: "my input" })),
      h3("Disabled"),
      div(
        input({
          id: "my-input-disabled",
          label: "my input disabled",
          disabled: true,
        }),
        input({
          id: "my-input-disabled-value",
          label: "my input disabled",
          disabled: true,
          value: "with value",
        })
      )
    );
};
