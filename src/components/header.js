import React, { useContext } from "react"
import { Link } from "gatsby"
import { lightTheme, darkTheme } from "../theme";
import { ThemeContext } from "./ThemeProvider";
import ThemeToggle from "./ThemToggle";

const Header = ({ siteTitle }) => {
  const { theme } = useContext(ThemeContext);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        background: currentTheme.background,
        color: currentTheme.text
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          fontWeight: '700'
        }}
      >
        {siteTitle}
      </Link>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/journal-entries"
              style={{
                marginLeft: "1rem",
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
                fontWeight: '700'
              }}
            >
              Research Journals
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                marginLeft: "1rem",
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
                fontWeight: '700'
              }}
            >
              About
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}

export default Header;