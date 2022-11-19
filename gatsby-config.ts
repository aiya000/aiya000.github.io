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
  ],
}

export default config
