import { HeadFC } from 'gatsby'
import { PageProps, graphql } from 'gatsby'
import React from 'react'

import * as style from './index.css'

import perolalaImage from '@/assets/images/perolala.png'
import PostPreview from '@/components/PostPreview'
import Seo from '@/components/Seo'
import Layout from '@/components/layout'
import { raise } from '@/modules/Error'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const postPreviews = data.allMarkdownRemark.edges.map(extractEdgeToPost)

  return (
    <Layout className={style.container}>
      <img src={perolalaImage} alt="logo" className={style.logo} />
      <h1 className={style.blogName}>aiya000のメモ帳</h1>
      {postPreviews}
    </Layout>
  )
}

function extractEdgeToPost(
  edge: Queries.IndexPageQuery['allMarkdownRemark']['edges'][0],
): React.ReactNode {
  const title = edge.node.frontmatter?.title ?? raise('.title is not existence.')
  const tags =
    edge.node.frontmatter?.tags?.flatMap((tag) => (tag === null ? [] : [tag])) ??
    raise('.tags is not existence.')
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

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(
      # ne excludes directories
      filter: { frontmatter: { title: { ne: "" } } }
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
