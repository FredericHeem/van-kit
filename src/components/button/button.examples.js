import Button from "./button";

export default (context) => {
  const { tr, van } = context;
  const { div, p, h2, h3 } = van.tags;
  const button = Button(context);
  return () =>
    div(
      h2(tr("Button Examples")),
      h3("Flat"),
      p(
        button({
          label: tr("FLAT"),
        }),
        button({
          primary: true,
          label: tr("FLAT PRIMARY"),
        }),
        button({
          accent: true,
          label: tr("FLAT ACCENT"),
        }),
        button({
          ripple: true,
          label: tr("RIPPLE FLAT"),
        }),
        button({
          disabled: true,
          label: tr("DISABLED"),
        })
      ),
      h3("Raised"),
      p(
        button({
          label: tr("FLAT"),
          raised: true,
        }),
        button({
          primary: true,
          raised: true,
          label: tr("FLAT PRIMARY"),
        }),
        button({
          accent: true,
          raised: true,
          label: tr("FLAT ACCENT"),
        }),
        button({
          ripple: true,
          raised: true,
          label: tr("RIPPLE FLAT"),
        }),
        button({
          disabled: true,
          raised: true,
          label: tr("DISABLED"),
        })
      )
    );
};
