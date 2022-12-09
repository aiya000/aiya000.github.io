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

  const template = path.resolve('./src/post.tsx')
  for (edge of query.data.allMarkdownRemark.edges) {
    createPage({
      component: template,
      path: `/posts/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  }
}
