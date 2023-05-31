import { css } from "goober";

export const Footer = ({ tr, van }) => {
  const { footer, span, a, ul, li, p } = van.tags;

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
      span(`version FE: ${__VERSION__}`)
    );
};
