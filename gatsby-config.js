module.exports = {
  siteMetadata: {
    title: `grafikveri`,
    description: `infografik bilgi sitesi`,
    author: `@xxx`,
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-netlify-cms`,
      `gatsby-transformer-remark`,
       {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `content`,
           path: `${__dirname}/content/`
         }
       },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve:`gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/data`
          },
        },
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
