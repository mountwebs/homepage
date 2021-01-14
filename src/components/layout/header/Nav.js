import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

// const containerCss = css`
//   display: flex;
//   align-items: flex-end;
// `;

const linkCss = css`
  text-decoration: none;
  margin-right: 10px;
  color: black;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const activeLinkCss = css`
  color: "red";
`;

// const linkText = css`align-self`;

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
