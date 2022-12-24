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
  const postPreviews = [...data.allMarkdownRemark.edges]
    .sort((x, y) => compareBySlugDateReversed(x.node.fields.slug, y.node.fields.slug))
    .map(extractEdgeToPost)

  return (
    <Layout className={style.container}>
      <img src={perolalaImage} alt="logo" className={style.logo} />
      <h1 className={style.blogName}>aiya000のメモ帳</h1>
      {postPreviews}
    </Layout>
  )

  function compareBySlugDateReversed(slugX: string, slugY: string): number {
    const x = new Date(slugX.match(/^\d{4}-\d{2}-\d{2}/) ?? raise('.date of x could not get.'))
    const y = new Date(slugY.match(/^\d{4}-\d{2}-\d{2}/) ?? raise('.date of y could not get.'))
    return x > y ? -1 : x === y ? 0 : 1
  }
}

function extractEdgeToPost(
  edge: Queries.IndexPageQuery['allMarkdownRemark']['edges'][0],
): React.ReactNode {
  const title = edge.node.frontmatter?.title ?? raise('.title is not existence.')
  const tags =
    edge.node.frontmatter?.tags?.split?.(',')?.map?.((tag) => tag.trim()) ??
    raise('.tags is not existence.')
  const slug = edge.node.fields?.slug ?? raise('.slug is not existence.')
  const excerpt = edge.node.excerpt ?? raise('.excerpt is not existence.')

  return <PostPreview title={title} tags={tags} slug={slug} excerpt={excerpt} key={edge.node.id} />
}

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />

export const query = graphql`
  query IndexPage {
    # ne excludes directories
    allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
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
