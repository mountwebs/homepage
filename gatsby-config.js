module.exports = {
  siteMetadata: {
    title: `Stian Klasbu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Monokai",
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-slug",
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
