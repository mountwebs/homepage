import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { css } from "@emotion/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
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
  const [menuState, setMenuState] = useState(false);

  return (
    <Menu
      right
      disableAutoFocus
      isOpen={menuState}
      onStateChange={state => setMenuState(state.isOpen)}
      width={150}
    >
      <ul css={listCss}>
        <li>
          <AnchorLink
            css={navLinkCss}
            to="/#aboutMe"
            onAnchorLinkClick={() => setMenuState(false)}
          >
            about
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            css={navLinkCss}
            to="/#stack"
            onAnchorLinkClick={() => setMenuState(false)}
          >
            stack
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            css={navLinkCss}
            to="/#projects"
            onAnchorLinkClick={() => setMenuState(false)}
          >
            projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink css={navLinkCss} to={`/blog/`}>
            blog
          </AnchorLink>
        </li>

        <div
          css={css`
            display: flex;
            color: white;
            justify-content: space-around;
            margin-top: 20px;
          `}
        >
          <a
            href="https://www.linkedin.com/in/stian-klasbu-917a40162/"
            style={{
              color: "inherit",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <AiOutlineLinkedin style={{ height: 24, width: 24 }} />
          </a>

          <a
            href="https://github.com/mountwebs"
            style={{
              color: "inherit",
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
      </ul>
    </Menu>
  );
};

export default Sidebar;
