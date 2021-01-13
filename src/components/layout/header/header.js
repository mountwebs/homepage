import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      className={css`
        display: flex;
        color: blue;
        width: 100%;
        justify-content: space-between;
      `}
    >
      <div>
        <Link
          to={`/`}
          className={css`
            text-decoration: none;
          `}
        >
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
      </div>
      <div>
        <Link
          css={css`
            padding-left: 10px;
          `}
          to={`/about/`}
          activeStyle={{ color: "red" }}
        >
          About
        </Link>
        <Link
          css={css`
            padding-left: 10px;
          `}
          to={`/blog/`}
          activeStyle={{ color: "red" }}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;
