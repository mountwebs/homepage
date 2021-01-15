import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
    <AnchorLink css={linkCss} to="/#hello">
      <h2 css={titleCss}>{data.site.siteMetadata.title}</h2>
    </AnchorLink>
  );
};

export default Title;
