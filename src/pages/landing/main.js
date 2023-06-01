export const main = (context) => {
  const { tr, van } = context;
  const { div, p, main, h1 } = van.tags;

  return function Main() {
    return main(
      h1(tr("Van Kit Landing Page ")),
      p("This is an example of a minimal site ")
    );
  };
};
