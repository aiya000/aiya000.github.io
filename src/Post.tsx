import { HeadFC, graphql } from 'gatsby'
import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import WriterProfile from '@/components/WriterProfile'
import { raise } from '@/modules/Error'

/**
 * A template for src/posts/*.md
 */
const Post: React.FC<{ data: Queries.PostPageQuery }> = ({ data }) => {
  return (
    <div>
      <Layout>
        <article>
          <div
            className="markdown-entry"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark?.html ?? raise('.html not found.'),
            }}
          />
        </article>
      </Layout>

      <WriterProfile />
    </div>
  )
}

export default Post

// TODO: Don't ignore eslint.
// eslint-disable-next-line react/prop-types
export const Head: HeadFC<Queries.PostPageQuery> = ({ data }) => (
  // eslint-disable-next-line react/prop-types
  <Seo routeName={data.markdownRemark?.frontmatter?.title ?? raise('.title not found.')} />
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
