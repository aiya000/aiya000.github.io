import { HeadFC } from 'gatsby'
import { PageProps, graphql } from 'gatsby'
import { Link } from 'gatsby'
import React from 'react'

import * as style from './index.css'

import clockImage from '@/assets/images/clock.svg'
import perolalaImage from '@/assets/images/perolala.png'
import Seo from '@/components/Seo'
import Layout from '@/components/layout'
import { raise } from '@/modules/Error'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const posts = [...data.allMarkdownRemark.edges]
    .sort((x, y) => compareBySlugDateReversed(x.node.fields.slug, y.node.fields.slug))
    .map(extractEdgeToPost)

  return (
    <Layout className={style.container}>
      <img src={perolalaImage} alt="logo" className={style.logo} />
      <h1 className={style.blogName}>aiya000のメモ帳</h1>
      {posts}
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
  const tags = edge.node.frontmatter?.tags ?? raise('.tags is not existence.')

  const slug = edge.node.fields?.slug ?? raise('.slug is not existence.')
  const date = slug.match(/^\d{4}-\d{2}-\d{2}/) ?? raise('.date could not get.')

  return (
    <div className={style.blogEntry} key={edge.node.id}>
      <div className={style.window}>
        <div className={style.blogDate}>
          <img src={clockImage} alt="clock" className={style.clock} />
          <span className={style.category}>{date}</span>
        </div>
        <h3 className={style.blogTitle}>
          <Link to={`/posts/${slug}`}>{title}</Link>
        </h3>
        <div>tags: {tags}</div>
        <div>{edge.node.excerpt}</div>
        <Link to={`/posts/${slug}`}>続きを見る</Link>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />

export const query = graphql`
  query IndexPage {
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
