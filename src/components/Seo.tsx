import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { raise } from '@/modules/Error'

export type Props<PageQuery extends object> = PageProps<PageQuery> & {
  /**
   * e.g. 'Home', 'About', ...
   */
  routeName: string
}

export const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

const Seo: React.FC<Props<Queries.SeoQuery>> = ({ routeName, data }) => {
  const title = data?.site?.siteMetadata?.title ?? raise('Invalid query or config')
  const siteUrl = data?.site?.siteMetadata?.siteUrl ?? raise('Invalid query or config')

  const fullTitle = `${title} - ${routeName}`
  const description = 'ギャラクシー・シックス・センスワイ / プログラミング・数学・一次創作'
  const ogImagePath = '/images/mu.png'
  const twitterAccount = '@public_ai000ya'

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={ogImagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImagePath} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"
      />
    </>
  )
}

export default Seo
