import { css } from "goober";

import { useQuery } from "../../utils/useQuery";

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

export const footer = ({ tr, van }) => {
  const { footer, span, a, ul, li, p } = van.tags;

  const op = useQuery({
    van,
    run: async () => {
      const { version } = await fetchJSON("api/v1/version");
      return version;
    },
  });

  return function Footer() {
    return footer(
      {
        class: css`
          display: flex;
          justify-content: center;
          span {
            margin: 1rem;
          }
        `,
      },
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
};
