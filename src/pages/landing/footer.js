import { css } from "@linaria/core";

import { useQuery } from "../useQuery";

const links = [
  { name: "GitHub", href: "" },
  { name: "YouTube", href: "" },
  { name: "Discord", href: "" },
];

async function fetchJSON(request) {
  try {
    const response = await fetch(request, {});
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
    throw response;
  } catch (error) {
    throw error;
  }
}

export const Footer = ({ tr, van }) => {
  const { footer, span, a, ul, li, p } = van.tags;

  const op = useQuery({
    van,
    run: async () => {
      const { version } = await fetchJSON("api/v1/version");
      return version;
    },
  });

  return () =>
    footer(
      {
        class: css`
          display: flex;
          justify-content: center;
          span {
            margin: 1rem;
          }
        `,
      },
      // ul(
      //   {
      //     style: `list-style-type: none;
      //         display:flex;
      //         #justify-content: space-around;
      //         li > { margin: 1rem;
      //         }
      //     `,
      //   },
      //   links.map((link) =>
      //     li(
      //       {
      //         style: `margin: 0 0.5rem ;`,
      //       },
      //       a({ href: link.href }, link.name)
      //     )
      //   )
      // ),
      span(`version FE: ${__VERSION__}`),
      span(
        `BE: `,
        van.bind(op.isLoading, op.data, op.error, (isLoading, data, error) => {
          if (isLoading) {
            return "Loading";
          } else if (error) {
            return "Error";
          } else {
            return data;
          }
        })
      )
    );
};
