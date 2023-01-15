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
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      allMarkdownRemark(sort: { fields: { slug: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `)
  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${query.errors}`)
    return
  }

  createPostPages(createPage, query)
  createTagPages(createPage, query)
  return

  function createPostPages(createPage, query) {
    for (edge of query.data.allMarkdownRemark.edges) {
      const postPath = `/posts/${edge.node.fields.slug}`

      createPage({
        component: path.resolve('./src/components/templates/Post.tsx'),
        path: postPath,
        context: {
          slug: edge.node.fields.slug,
        },
      })

      // For compatible with my old blog's URL, redirect to avobe url.
      // NOTE: By unknown reason, createRedirect is not working.
      createPage({
        component: path.resolve('./src/components/templates/PostHtmlRedirect.tsx'),
        path: `${postPath}.html`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }
  }

  /**
   * https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
   */
  function createTagPages(createPage, query) {
    const tags = query.data.tagsGroup.group.map((group) => group.fieldValue)
    for (const tag of tags) {
      createPage({
        component: path.resolve('./src/components/templates/PostListOfTag.tsx'),
        path: `/tags/${tag}`,
        context: { tag },
      })
    }
  }
}
