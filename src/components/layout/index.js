import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "./header"

import { rhythm } from "../../utils/typography"
export default function Layout({ children }) {
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
  )
  return (
    <div
      css={css`
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1)};
      `}
    >
      <Header />
      {children}
    </div>
  )
}
