const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create the using-dsg page
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // Query for Markdown nodes to use in creating pages
  const result = await graphql(`
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

  // Create pages for each Markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/journal-entries/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/journal-entry.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
