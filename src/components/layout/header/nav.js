import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const containerCss = css`
  display: flex;
`;

const navCss = css`
  // line-height: 29px;
`;

const linkCss = css`
  text-decoration: none;
  margin-left: 10px;
  color: black;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const iconContainerCss = css`
  margin-left: 10px;
  display: flex;
  align-icons: flex-end;
`;

const Nav = () => {
  return (
    <div css={containerCss}>
      <div css={navCss}>
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
      <div css={iconContainerCss}>
        <a
          href="https://www.linkedin.com/in/stian-klasbu-917a40162/"
          style={{ color: "inherit", display: "flex", alignItems: "flex-end" }}
        >
          {" "}
          <AiOutlineLinkedin style={{ height: 24, width: 24 }} />
        </a>

        <a
          href="https://github.com/mountwebs"
          style={{ color: "inherit", display: "flex", alignItems: "flex-end" }}
        >
          <VscGithub
            style={{
              height: 23,
              width: 23,
              padding: "0px 0 2px",
              marginLeft: 2,
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
