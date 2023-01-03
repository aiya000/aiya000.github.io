import { HeadFC, graphql } from 'gatsby'
import React from 'react'

import * as style from './archive.css'

import Layout from '@/components/Layout'
import PostPreview from '@/components/PostPreview'
import Seo from '@/components/Seo'
import WriterProfile from '@/components/WriterProfile'
import { raise } from '@/modules/Error'

/**
 * A template for src/posts/*.md
 */
const ArchivePage: React.FC<{ data: Queries.ArchivePageQuery }> = ({ data }) => {
  const postPreviews = data.allMarkdownRemark.edges.map(extractEdgeToPost)

  return (
    <div>
      <Layout>
        <div className={style.previews}>{postPreviews}</div>
      </Layout>

      <WriterProfile />
    </div>
  )
}

function extractEdgeToPost(
  edge: Queries.ArchivePageQuery['allMarkdownRemark']['edges'][0],
): React.ReactNode {
  const title = edge.node.frontmatter?.title ?? raise('.title is not existence.')
  const tags = (edge.node.frontmatter?.tags ?? raise('.tags is not existence.')).filter(
    (tag): tag is string => tag !== null,
  )
  const slug = edge.node.fields?.slug ?? raise('.slug is not existence.')
  const excerpt = (
    <div
      dangerouslySetInnerHTML={{
        __html: edge.node.excerpt ?? raise('.excerpt is not existence.'),
      }}
    />
  )

  return (
    <PostPreview
      className={style.preview}
      title={title}
      tags={tags}
      slug={slug}
      excerpt={excerpt}
      key={edge.node.id}
    />
  )
}

export default ArchivePage

export const Head: HeadFC = () => <Seo routeName="Archive" />

export const query = graphql`
  query ArchivePage {
    allMarkdownRemark(
      # ne excludes directories
      filter: { frontmatter: { title: { ne: "" } } }
      sort: { fields: { slug: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 200)
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
