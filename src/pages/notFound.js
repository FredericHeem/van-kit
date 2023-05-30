export const NotFound = (context) => {
  const { van, tr } = context;
  const { div } = van.tags;
  return () => div(tr("NotFound"));
};
