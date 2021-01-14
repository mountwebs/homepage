import React from "react";
import Header from "./header/header";
import "./globalStyle.css";
import { css } from "@emotion/react";
import Sidebar from "./../sidebar/sidebar";

const containerCss = css`
  margin: 0 auto;
  padding: 0 5px;
  background-color: rgb(247, 247, 247);
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
