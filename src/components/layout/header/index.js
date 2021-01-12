import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../../../utils/typography"
import styles from "./header.module.css"

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
  )
  return (
    <div className={styles.container}>
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h3 className={styles.title}> {data.site.siteMetadata.title}</h3>
        </Link>
      </div>
      <div className={styles.nav}>
        <Link
          className={styles.navLink}
          to={`/about/`}
          activeStyle={{ color: "red" }}
        >
          About
        </Link>
        <Link
          className={styles.navLink}
          to={`/blog/`}
          activeStyle={{ color: "red" }}
        >
          Blog
        </Link>
      </div>
    </div>
  )
}

export default Header
