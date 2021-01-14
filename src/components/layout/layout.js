import React from "react";
import Header from "./header/header";
import "./globalStyle.css";
import { css } from "@emotion/react";
import Sidebar from "./../sidebar/sidebar";

const containerCss = css`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div css={containerCss}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
