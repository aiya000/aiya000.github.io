import { Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '@/components/layout'
import { raise } from '@/modules/Error'

/**
 * For compatible with my old blog's URL.
 */
const PostHtmlRedirect: React.FC<{ data: Queries.PostHtmlRedirectPageQuery }> = ({ data }) => {
  const url = data.markdownRemark?.fields?.slug ?? raise('.slug is not found.')
  React.useEffect(() => {
    setTimeout(() => (location.href = url), 3000)
  })

  return (
    <Layout>
      <div>
        Redirecting to <Link to={url}>{url}</Link>...
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
