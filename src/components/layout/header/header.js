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
  padding: ${rhythm(1)} 10px ${rhythm(1.5)} 10px;
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
