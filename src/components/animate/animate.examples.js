import animate from "./animate";

export default (context) => {
  const { tr, van } = context;
  const { section, div, button, h3 } = van.tags;
  const Animate = animate(context);

  return function () {
    const showState = van.state(true);
    const dom = section();
    dom.appendChild(
      div(
        h3("Test Animate"),
        div(
          button(
            {
              onclick: () => {
                showState.val = !showState.val;
              },
            },
            () => (showState.val ? "Hide" : "Show")
          )
        ),
        div(
          () =>
            showState.val
              ? Animate({
                  parent: dom,
                  Component: () => div("Ciao"),
                  animationHide: "hide-right 0.5s",
                  animationShow: "show-right 0.5s",
                })
              : ""
        )
      )
    );
    return dom;
  };
};
