import React from "react";
import { css } from "@emotion/react";
import Title from "./title";
import Nav from "./nav";
import { rhythm } from "../../../utils/typography";

const headerCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1.5)};
`;

const Header = () => {
  return (
    <header css={headerCss}>
      <Title />
      <Nav />
    </header>
  );
};

export default Header;
