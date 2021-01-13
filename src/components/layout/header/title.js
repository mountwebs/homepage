import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";

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
    <div>
      <Link
        to={`/`}
        css={css`
          text-decoration: none;
        `}
      >
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
    </div>
  );
};

export default Title;
