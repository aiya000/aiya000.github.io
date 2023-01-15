import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  graphqlTypegen: true,

  /**
   * Another metadata is in '@/src/components/Seo.tsx'.
   */
  siteMetadata: {
    title: 'galaxy-sixth-sensey',
    siteUrl: 'https://aiya000.github.io',
  },

  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-twitter',
    'gatsby-plugin-vanilla-extract',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts',
      },
      __key: 'posts',
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-emoji',
          'gatsby-remark-images',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-JXE5SFX9LF'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}

export default config
