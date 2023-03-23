import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const JournalEntries = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              topic
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Journal Entries</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.frontmatter.slug}>
            <Link to={`/journal-entries/${node.frontmatter.slug}`}>
              {node.frontmatter.title} - {node.frontmatter.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JournalEntries
