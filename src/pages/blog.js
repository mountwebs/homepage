import React from "react";
import { css } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout/layout";

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

export default function Blog({ data }) {
  return (
    <Layout>
      <div css={containerCss}>
        <main css={mainCss}>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #555;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>
                  {node.excerpt}
                  <br />{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                    }}
                  >
                    Read more
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
