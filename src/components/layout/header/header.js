import React from "react";
import { css } from "@emotion/react";
import Title from "./title";
import Nav from "./Nav";

const headerCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
