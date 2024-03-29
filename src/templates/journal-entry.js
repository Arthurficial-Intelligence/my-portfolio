import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
    query JournalEntryBySlug($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          topic
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
`;


const JournalEntry = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default JournalEntry
