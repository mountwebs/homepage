import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";

const titleCss = css`
  margin-bottom: 2px;
  color: black;
`;

const linkCss = css`
  text-decoration: none;
`;

const Title = () => {
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
    <Link to={`/`} css={linkCss}>
      <h2 css={titleCss}>{data.site.siteMetadata.title}</h2>
    </Link>
  );
};

export default Title;
