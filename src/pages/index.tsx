import { HeadFC } from 'gatsby'
import { Link, PageProps, graphql } from 'gatsby'
import React from 'react'

import * as style from './index.css'

import perolalaImage from '@/assets/images/perolala.png'
import Layout from '@/components/Layout'
import PostPreview from '@/components/PostPreview'
import Seo from '@/components/Seo'
import WriterProfile from '@/components/WriterProfile'
import { raise } from '@/modules/Error'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const postPreviews = data.allMarkdownRemark.edges.map(extractEdgeToPost)

  return (
    <Layout className={style.container}>
      <img src={perolalaImage} alt="logo" className={style.logo} />
      <h1 className={style.blogName}>aiya000のメモ帳</h1>

      <div className={style.body}>
        <div className={style.postPreviews}>{postPreviews}</div>
        <WriterProfile className={style.profile} />
      </div>

      <div className={style.viewAll}>
        <Link to="/archive">全ての記事を表示する</Link>
      </div>
    </Layout>
  )
}

function extractEdgeToPost(
  edge: Queries.IndexPageQuery['allMarkdownRemark']['edges'][0],
): React.ReactNode {
  const title = edge.node.frontmatter?.title ?? raise('.title is not existence.')
  const tags =
    edge.node.frontmatter?.tags?.filter((tag): tag is string => tag !== null) ??
    raise('.tags is not existence.')
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
      className={style.postPreview}
      title={title}
      tags={tags}
      slug={slug}
      excerpt={excerpt}
      key={edge.node.id}
    />
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(
      # ne excludes directories
      filter: { frontmatter: { title: { ne: "" } } }
      sort: { fields: { slug: DESC } }
      limit: 10
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 100)
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
