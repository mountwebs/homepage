import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import CVPdf from "../../../assets/pdf/CV.pdf";

const containerCss = css`
  display: flex;

  @media only screen and (max-width: 470px) {
    display: none;
  }
`;

const linkCss = css`
  text-decoration: none;
  margin-left: 10px;
  color: black;
`;

const iconContainerCss = css`
  margin-left: 20px;
  display: flex;
`;

const Nav = () => {
  return (
    <div css={containerCss}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <AnchorLink css={linkCss} to="/#aboutMe">
          about
        </AnchorLink>
        <AnchorLink css={linkCss} to="/#stack">
          stack
        </AnchorLink>
        <AnchorLink css={linkCss} to="/#projects">
          projects
        </AnchorLink>
        <Link css={linkCss} to={`/blog/`} activeStyle={{ color: "red" }}>
          blog
        </Link>
        <a href={CVPdf} css={linkCss}>
          CV
        </a>
      </div>
      <div css={iconContainerCss}>
        <a
          href="https://www.linkedin.com/in/stian-klasbu-917a40162/"
          style={{ color: "black", display: "flex", alignItems: "flex-end" }}
        >
          <AiOutlineLinkedin style={{ height: 24, width: 24 }} />
        </a>

        <a
          href="https://github.com/mountwebs"
          style={{
            color: "black",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <VscGithub
            style={{
              height: 23,
              width: 23,
              paddingBottom: "2px",
              marginLeft: 2,
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
