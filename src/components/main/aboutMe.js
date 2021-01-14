import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";

const containerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${rhythm(1)};
`;

const AboutMe = () => {
  return (
    <div css={containerCss}>
      <h2>About me</h2>
      <p></p>
    </div>
  );
};

export default AboutMe;
