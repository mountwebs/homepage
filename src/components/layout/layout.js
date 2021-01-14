import React from "react";
import Header from "./header/header";
import "./globalStyle.css";
import { css } from "@emotion/react";

const containerCss = css`
  margin: 0 auto;
  padding: 0 5px;
  background-color: green;
  max-width: 800px;
`;

const Layout = ({ children }) => {
  return (
    <div css={containerCss}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
