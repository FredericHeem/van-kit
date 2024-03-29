const oninput =
  (formState) =>
  ({ target: { name, value } }) => {
    formState.val = { ...formState.val, [name]: value };
  };

const onsubmit = (formData) => (event) => {
  event.stopPropagation();
  alert(JSON.stringify(formData));
};

const submitIsDisabled = (formData) => formData.login == "";

export default function ({ van, tr }) {
  const { form, div, p, button, input } = van.tags;
  const formState = van.state({ login: "", password: "" });

  return () =>
    form(
      p(tr("Hello Form")),
      div(
        input({
          name: "login",
          type: "text",
          oninput: oninput(formState),
        })
      ),
      div(
        input({
          name: "password",
          type: "password",
          oninput: oninput(formState),
        })
      ),
      () =>
        button(
          {
            type: "submit",
            disabled: submitIsDisabled(formState.val),
            onclick: onsubmit(formState.val),
          },
          tr("Submit")
        )
    );
}
