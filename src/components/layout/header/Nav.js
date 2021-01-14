import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const linkCss = css`
  text-decoration: none;
  margin-right: 10px;
  color: black;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <div>
      <Link css={linkCss} to={`/blog/`} activeStyle={{ color: "red" }}>
        Blog
      </Link>
      <Link css={linkCss} to={`/about/`} activeStyle={{ color: "red" }}>
        About
      </Link>
    </div>
  );
};

export default Nav;
