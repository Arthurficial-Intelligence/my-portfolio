/**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
//  */

// // You can delete this file if you're not using it
// // gatsby-browser.js and gatsby-ssr.js
const React = require("react");
const { ThemeProvider } = require("./src/components/ThemeProvider");

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};


