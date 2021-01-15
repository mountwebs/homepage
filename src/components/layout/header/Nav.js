import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const linkCss = css`
  text-decoration: none;
  margin-left: 10px;
  color: black;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <div>
      <AnchorLink css={linkCss} to="/#aboutMe">
        about
      </AnchorLink>
      <AnchorLink css={linkCss} to="/#projects">
        projects
      </AnchorLink>
      <Link css={linkCss} to={`/blog/`} activeStyle={{ color: "red" }}>
        blog
      </Link>
    </div>
  );
};

export default Nav;
