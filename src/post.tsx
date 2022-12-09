import { HeadFC, graphql } from 'gatsby'
import React from 'react'

import Seo from '@/components/Seo'
import Layout from '@/components/layout'

/**
 * A template for src/posts/*.md
 */
const Post: React.FC<{ data: Queries.PostPageQuery }> = ({ data }) => {
  return (
    <Layout>
      <article>
        <div
          className="markdown-entry"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </article>
    </Layout>
  )
}

export default Post

export const Head: HeadFC<Queries.PostPageQuery> = ({ data }: Queries.PostPageQuery) => (
  <Seo routeName={data.markdownRemark.frontmatter.title} />
)

export const query = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
