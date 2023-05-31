import button from "./button";

export default (context) => {
  const { tr, van } = context;
  const { div, p, h2, h3 } = van.tags;
  const Button = button(context);
  return () =>
    div(
      h2(tr("Button Examples")),
      h3("Flat"),
      p(
        Button({
          label: tr("FLAT"),
        }),
        Button({
          primary: true,
          label: tr("FLAT PRIMARY"),
        }),
        Button({
          accent: true,
          label: tr("FLAT ACCENT"),
        }),
        Button({
          ripple: true,
          label: tr("RIPPLE FLAT"),
        }),
        Button({
          disabled: true,
          label: tr("DISABLED"),
        })
      ),
      h3("Raised"),
      p(
        Button({
          label: tr("FLAT"),
          raised: true,
        }),
        Button({
          primary: true,
          raised: true,
          label: tr("FLAT PRIMARY"),
        }),
        Button({
          accent: true,
          raised: true,
          label: tr("FLAT ACCENT"),
        }),
        Button({
          ripple: true,
          raised: true,
          label: tr("RIPPLE FLAT"),
        }),
        Button({
          disabled: true,
          raised: true,
          label: tr("DISABLED"),
        })
      )
    );
};
