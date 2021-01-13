import React from "react";
import { css } from "@emotion/react";
import Header from "./header/header";

import { rhythm } from "../../utils/typography";
const Layout = ({ children }) => {
  return (
    <div
      css={css`
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1)};
      `}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
