import ButtonExamples from "../../components/button/button.examples";
import InputExamples from "../../components/input/input.examples";

export const Main = (context) => {
  const { tr, van } = context;
  const { div, main, h1 } = van.tags;

  const buttonExamples = ButtonExamples(context);
  const inputExamples = InputExamples(context);

  return () =>
    main(
      h1(tr("Examples")),
      buttonExamples(),
      //
      inputExamples()
    );
};
