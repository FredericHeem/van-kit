export const layoutDefault = (context, { header, footer }) => {
  const { van } = context;
  const { div } = van.tags;
  return function LayoutDefault({ component }) {
    return div(
      {
        style: `
          display: flex; 
          min-width: 100vw;
          min-height: 100vh;
          flex-direction: column;
        `,
      },
      header(context)(),
      div({ style: "flex-grow: 1" }, component()),
      footer(context)()
    );
  };
};
