import { HeadFC, graphql } from 'gatsby'
import React from 'react'

import PostPreview from '@/components/PostPreview'
import Seo from '@/components/Seo'
import WriterProfile from '@/components/WriterProfile'
import Layout from '@/components/layout'
import { raise } from '@/modules/Error'

/**
 * A template for src/posts/*.md
 */
const PostListOfTag: React.FC<{ data: Queries.PostListOfTagQuery }> = ({ data }) => {
  const postPreviews = data.allMarkdownRemark.edges.map(extractEdgeToPost)

  return (
    <div>
      <Layout>{postPreviews}</Layout>

      <WriterProfile />
    </div>
  )
}

function extractEdgeToPost(
  edge: Queries.PostListOfTagQuery['allMarkdownRemark']['edges'][0],
): React.ReactNode {
  const title = edge.node.frontmatter?.title ?? raise('.title is not existence.')
  const tags = (edge.node.frontmatter?.tags ?? raise('.tags is not existence.')).flatMap((tag) =>
    tag === null ? [] : [tag],
  )
  const slug = edge.node.fields?.slug ?? raise('.slug is not existence.')
  const excerpt = (
    <div>
      {(edge.node.excerpt ?? raise('.excerpt is not existence.')).split('\n').map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )

  return <PostPreview title={title} tags={tags} slug={slug} excerpt={excerpt} key={edge.node.id} />
}

export default PostListOfTag

// TODO: Don't ignore eslint.
// eslint-disable-next-line react/prop-types
export const Head: HeadFC<Queries.PostListOfTagQuery> = ({ pageContext }) => {
  if (pageContext === null) {
    throw new Error('pageContext is null.')
  }
  const context: { tag?: unknown } = pageContext

  const tag = context.tag ?? raise('.tag not found.')
  if (typeof tag !== 'string') {
    throw new Error('.tag is not a string.')
  }

  const routeName = `/tags/${tag}`
  // eslint-disable-next-line react/prop-types
  return <Seo routeName={routeName} />
}

export const query = graphql`
  query PostListOfTag($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { glob: $tag } } }
      sort: { fields: { slug: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
