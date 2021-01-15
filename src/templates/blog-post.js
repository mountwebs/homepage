import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { rhythm } from "../utils/typography";
import { css } from "@emotion/react";

const containerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const mainCss = css`
  max-width: 800px;
  margin: 0 20px;
  padding: ${rhythm(3)} 0;
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div css={containerCss}>
        <main css={mainCss}>
          {" "}
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
