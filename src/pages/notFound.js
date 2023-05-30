export default function (context) {
  const { van, tr } = context;
  const { div } = van.tags;
  return () => div(tr("NotFound"));
}
