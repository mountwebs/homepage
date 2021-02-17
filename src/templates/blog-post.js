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
  max-width: 650px;
  padding: ${rhythm(0.5)} 20px;
`;

const metaCss = css`
  padding-bottom: ${rhythm(1)};
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  console.log(data);
  return (
    <Layout>
      <div css={containerCss}>
        <main css={mainCss}>
          <div css={metaCss}>
            <small>
              <a
                href="/blog"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <b>Stian </b> / {post.frontmatter.date}{" "}
              </a>
            </small>
          </div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.modified && (
            <small>
              <p style={{ color: "#888" }}>
                Last modified {post.frontmatter.modified}.
              </p>
            </small>
          )}
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
        date(formatString: "DD. MM. YYYY")
        modified(formatString: "DD. MM. YYYY")
      }
    }
  }
`;
