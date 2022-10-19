/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata')

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#7159c1`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
  siteMetadata,
}
