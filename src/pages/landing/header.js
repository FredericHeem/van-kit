export const header = ({ tr, van }) => {
  const { header, h1 } = van.tags;
  return function Header() {
    return header(h1(tr("Landing Page")));
  };
};
