import React from "react";
import { css } from "@emotion/react";
import Title from "./title";
import Nav from "./nav";
import { rhythm } from "../../../utils/typography";

const outerContainerCss = css`
  width: 100%;
  margin-bottom: ${rhythm(1)};
  background-color: rgb(247, 247, 247);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
`;

// const innerContainerCss = css`
//   display: flex;
//   justify-content: center;
//   max-width: 800px;
// `;

const headerCss = css`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: ${rhythm(1)};
  margin: 0 20px;
  border-bottom: 1px solid;
  max-width: 1200px;
`;

const Header = () => {
  return (
    <div css={outerContainerCss}>
      {/* <div css={innerContainerCss}> */}
      <header css={headerCss}>
        <Title />
        <Nav />
      </header>
      {/* </div> */}
    </div>
  );
};

export default Header;
