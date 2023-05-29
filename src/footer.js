const links = [
  { name: "GitHub", href: "" },
  { name: "YouTube", href: "" },
  { name: "Discord", href: "" },
];

export const Footer = ({ tr, van }) => {
  const { footer, a, ul, li } = van.tags;
  return () =>
    footer(
      ul(
        {
          style: `list-style-type: none;
              display:flex;
              #justify-content: space-around;
              li > { margin: 1rem;
              }
          `,
        },
        links.map((link) =>
          li(
            {
              style: `margin: 0.5rem;`,
            },
            a({ href: link.href }, link.name)
          )
        )
      )
    );
};
