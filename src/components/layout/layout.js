import React from "react";
import Header from "./header/header";
import "./style.css";
import { css } from "@emotion/react";

const containerCss = css`
  margin: 0 auto;
  max-width: 500px;
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
