import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";

const Title = ({ children, marginBottom }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          padding: 0 10px;
          margin-bottom: ${rhythm(
            marginBottom !== "undefined" ? marginBottom : 1
          )};
          border-bottom: 2px solid;
        `}
      >
        <h2
          id="tech-stack"
          css={css`
            margin-bottom: 0;
          `}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};

export default Title;
