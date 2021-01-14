import React from "react";
import { css } from "@emotion/react";
import Title from "./title";
import Nav from "./nav";
import { rhythm } from "../../../utils/typography";

const containerCss = css`
  width: 100%;
  margin-bottom: ${rhythm(1)};
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: ${rhythm(1)};
  margin: 0 15px 0 15px;
  border-bottom: 1px solid;
`;

const Header = () => {
  return (
    <div css={containerCss}>
      <header css={headerCss}>
        <Title />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
