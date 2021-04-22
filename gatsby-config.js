module.exports = {
  siteMetadata: {
    title: `Curiosity`,
    description: `CuriosityWen‘s 2021 latest personal website`,
    author: `Wen`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 200,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `anchor`,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false
              },
              escapeEntities: {}
            }
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Curiosity`,
        short_name: `Curiosity`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/dr.png`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyfkotOQ2FFeGdxW`,
        concurrency: 5,
        tables: [
          {
            baseId: `appQ7dZb0ldgR7Ugz`,
            tableName: `Sandwiches`
          },
          {
            baseId: `appQ7dZb0ldgR7Ugz`,
            tableName: `Resources`
          }
        ]
      }
    },
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCMJwF_7x_N69ybjWq2aQ9NT8mvg_KlXtw",
          authDomain: "curiositywen-321dd.firebaseapp.com",
          databaseURL: "https://curiositywen-321dd-default-rtdb.firebaseio.com",
          projectId: "curiositywen-321dd",
          storageBucket: "curiositywen-321dd.appspot.com",
          messagingSenderId: "29895834057",
          appId: "1:29895834057:web:0d2d851ffc12afdf319018"
        },
        loginPath: "/login/",
        loginRedirectPath: "/",
      },
    }
  ],
};