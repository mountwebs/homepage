import React from "react";
import { css } from "@emotion/react";
import selfie from "../../assets/images/selfie.jpg";
import { rhythm } from "../../utils/typography";

const helloCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const imageCss = css`
  width: 200px;
  height: 275px;
  object-fit: cover;
  object-position: 0 25%;
  border-radius: 10%;
  margin: ${rhythm(1)} 10px 0 10px;
`;

const textContainerCss = css`
  max-width: 300px;
  margin: ${rhythm(1)} 10px 0 10px;
  text-align: center;
`;

const h1Css = css`
  margin: 0;
`;

const Hello = () => {
  return (
    <div css={helloCss} id="hello">
      <img src={selfie} css={imageCss} alt="Stian Klasbu" />
      <div css={textContainerCss}>
        <h1 css={h1Css}>
          <u>Hi, I'm Stian</u> Developer, Maker & Writer.
        </h1>
      </div>
    </div>
  );
};

export default Hello;
