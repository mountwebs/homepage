import React from "react";
import { slide as Menu } from "react-burger-menu";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import "./sidebar.css";

const linkCss = css`
  text-decoration: none;
  margin-right: 10px;
  color: black;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <Link css={linkCss} to={`/blog/`} activeStyle={{ color: "red" }}>
          Blog
        </Link>
        <Link css={linkCss} to={`/about/`} activeStyle={{ color: "red" }}>
          About
        </Link>
        {/* <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
    );
  }
}

export default Sidebar;
