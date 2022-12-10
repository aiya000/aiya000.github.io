const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': __dirname,
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

// https://qiita.com/hththt/items/a6a6fa7d2ee90b0cd854#slug%E3%81%A8%E3%81%AF
/**
 * Generates posts's slug automatically.
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

/**
 * Creates posts pages.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  for (edge of query.data.allMarkdownRemark.edges) {
    const postPath = `/posts/${edge.node.fields.slug}`

    createPage({
      component: path.resolve('./src/post.tsx'),
      path: postPath,
      context: {
        slug: edge.node.fields.slug,
      },
    })

    // For compatible with my old blog's URL, redirect to avobe url.
    // NOTE: By unknown reason, createRedirect is not working.
    createPage({
      component: path.resolve('./src/post-html-redirect.tsx'),
      path: `${postPath}.html`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  }
}
