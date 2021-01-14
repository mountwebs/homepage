import React from "react";
import { css } from "@emotion/react";
import selfie from "./121010987_751965865386817_7712053262209936402_n.jpg";

const helloCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageCss = css`
  width: 200px;
  height: 275px;
  object-fit: cover;
  object-position: 0 25%;
  border-radius: 10%;
  margin: 10px;
`;

const textContainerCss = css`
  max-width: 300px;
  margin: 10px;
  text-align: center;
`;

const Hello = () => {
  return (
    <div css={helloCss}>
      <img src={selfie} css={imageCss} alt="Stian Klasbu" />
      <div css={textContainerCss}>
        <h1>
          <u>Hi, I'm Stian</u> Developer, Maker & Writer.
        </h1>
      </div>
    </div>
  );
};

export default Hello;
