import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const linkCss = css`
  padding-left: 10px;
`;

const activeLinkCss = css`
  color: "red";
`;

const Nav = () => {
  return (
    <div>
      <Link css={linkCss} to={`/about/`} activeStyle={activeLinkCss}>
        About
      </Link>
      <Link css={linkCss} to={`/blog/`} activeStyle={activeLinkCss}>
        Blog
      </Link>
    </div>
  );
};

export default Nav;
