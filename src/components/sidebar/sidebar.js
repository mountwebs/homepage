import React from "react";
import { slide as Menu } from "react-burger-menu";
import { css } from "@emotion/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./sidebar.css";

const listCss = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const navLinkCss = css`
  color: white;
`;

const Sidebar = () => {
  return (
    <Menu right>
      <ul css={listCss}>
        <li>
          <AnchorLink css={navLinkCss} to="/#aboutMe">
            about
          </AnchorLink>
        </li>
        <li>
          <AnchorLink css={navLinkCss} to="/#projects">
            projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink css={navLinkCss} to={`/blog/`}>
            blog
          </AnchorLink>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
