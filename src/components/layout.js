/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <title>Arthur Smith | Researcher & Software Engineer</title>
        <meta name="description" content="Explore the intersection of academia and software engineering with Arthur Smith. Discover insightful articles, in-depth research, and a professional portfolio showcasing a unique blend of knowledge, innovation, and experience." />
      </Helmet>
      <Header siteTitle={"Arthurficial Intelligence"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >

        </footer>
      </div>
    </>
  )
}

export default Layout
