import React from 'react'

import ogImage from '@/assets/images/og-image.png'

export type Props = {
  /**
   * e.g. 'Home', 'About', ...
   */
  routeName: string
}

const Seo: React.FC<Props> = ({ routeName }) => {
  // NOTE: Please tell me if using both PageProps and Props is able.

  const title = 'galaxy-sixth-sensey'
  const siteUrl = 'https://aiya000.github.io'
  const fullTitle = `${title} - ${routeName}`
  const description = 'ギャラクシー・シックス・センスワイ / プログラミング・数学・一次創作'
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
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
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
