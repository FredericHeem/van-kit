import buttonExamples from "../../components/button/button.examples";
import inputExamples from "../../components/input/input.examples";

export const main = (context) => {
  const { tr, van } = context;
  const { div, main, h1 } = van.tags;

  const ButtonExamples = buttonExamples(context);
  const InputExamples = inputExamples(context);

  return function () {
    return main(
      h1(tr("Examples")),
      ButtonExamples(),
      //
      InputExamples()
    );
  };
};
