import { globalStyle } from '@vanilla-extract/css'
import * as v from '@/css/variables.css'

globalStyle('html', {
  '@media': {
    [v.mediaMinWidth.sp]: {
      fontSize: 16,
    },
    [v.mediaMinWidth.tablet]: {
      fontSize: 20,
    },
    [v.mediaMinWidth.pc]: {
      fontSize: 22,
    },
  },
})

globalStyle('body', {
  background: `linear-gradient(90deg, ${v.color.dark}, ${v.color.darker})`,
  margin: 0,
})

globalStyle('a', {
  color: 'chocolate',
  textDecoration: 'underline dotted chocolate',
})

globalStyle('p', {
  overflowWrap: 'break-word',
})

// For @/pages/works.tsx
globalStyle('.pages-works h1', v.globalH1)
globalStyle('.pages-works h1:before', v.globalH1Before)
globalStyle('.pages-works h2', v.globalH2)
globalStyle('.pages-works h2:before', v.globalH2Before)

// For @/posts.tsx
globalStyle('.markdown-entry h1', v.globalH1)
globalStyle('.markdown-entry h1:before', v.globalH1Before)
globalStyle('.markdown-entry h2', v.globalH2)
globalStyle('.markdown-entry h2:before', v.globalH2Before)

// https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
globalStyle('.gatsby-highlight', {
  overflow: 'auto',
})
globalStyle('.gatsby-highlight pre[class*="language-"].line-numbers', {
  padding: '0 0 0 74px',
})
globalStyle('.gatsby-highlight pre[class*="language-"].line-numbers .line-numbers-rows', {
  padding: '0 0 0 16px',
})
