module.exports = {
  siteMetadata: {
    title: `Curiosity`,
    description: `CuriosityWen‘s 2021 latest personal website`,
    author: `Wen`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify-cms',
    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby PWA and NetlifyCMS`,
        short_name: `Gatsby PWA and NetlifyCMS`,
        start_url: `/`,
        background_color: `#6E74E0`,
        theme_color: `#6E74E0`,
        display: `standalone`,
        icon: `src/images/dr.png`,
      },
    },
  ],
};
