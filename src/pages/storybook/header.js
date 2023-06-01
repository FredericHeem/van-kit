export const header = ({ tr, van }) => {
  const { header, h1 } = van.tags;
  return () => header(h1(tr("Landing")));
};
