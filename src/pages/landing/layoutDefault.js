export const LayoutDefault = (context, { Header, Footer }) => {
  const { van } = context;
  const { div } = van.tags;
  return ({ component }) =>
    div(
      {
        style: `
          display: flex; 
          min-width: 100vw;
          min-height: 100vh;
          flex-direction: column;
        `,
      },
      Header(context)(),
      div({ style: "flex-grow: 1" }, component()),
      Footer(context)()
    );
};
