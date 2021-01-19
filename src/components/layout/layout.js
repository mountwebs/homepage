import React from "react";
import Header from "./header/header";
import "./globalStyle.css";
import { css } from "@emotion/react";
import Sidebar from "./../sidebar/sidebar";
import { rhythm } from "../../utils/typography";

const containerCss = css`
  margin: 0 auto;
`;

const mainCss = css`
  padding-top: ${rhythm(3)};
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div css={containerCss}>
        <Header />
        <main css={mainCss}></main>
        {children}
      </div>
    </div>
  );
};

export default Layout;
