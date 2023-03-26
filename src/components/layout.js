/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { lightTheme, darkTheme } from "../theme";
import { ThemeContext } from "../components/ThemeProvider";



import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Helmet>
        <title>Arthur Smith | Researcher & Software Engineer</title>
        <meta name="description" content="Explore the intersection of academia and software engineering with Arthur Smith. Discover insightful articles, in-depth research, and a professional portfolio showcasing a unique blend of knowledge, innovation, and experience." />
      </Helmet>
      <Header siteTitle={"Arthurficial Intelligence"} />

      <main style={{ background: currentTheme.background, color: currentTheme.text }}>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >

      </footer>
    </>
  )
}

export default Layout
