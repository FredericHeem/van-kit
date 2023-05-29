export const Header = ({ tr, van }) => {
  const { header, h1 } = van.tags;
  return () => header(h1(tr("Header")));
};
