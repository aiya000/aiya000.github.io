import { Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '@/components/Layout'
import { raise } from '@/modules/Error'

/**
 * For compatible with my old blog's URL.
 */
const PostHtmlRedirect: React.FC<{ data: Queries.PostHtmlRedirectPageQuery }> = ({ data }) => {
  const postName = data.markdownRemark?.fields?.slug ?? raise('.slug is not found.')
  const url = `/posts/${postName}`

  return (
    <Layout>
      <div>
        <Link to={url}>{url}</Link>を開いてください。
      </div>
    </Layout>
  )
}

export default PostHtmlRedirect

export const query = graphql`
  query PostHtmlRedirectPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
    }
  }
`
