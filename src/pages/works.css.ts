import { globalStyle, style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

globalStyle('.pages-works h1', v.globalH1)
globalStyle('.pages-works h1:before', v.globalH1Before)
globalStyle('.pages-works h2', v.globalH2)
globalStyle('.pages-works h2:before', v.globalH2Before)

export const circleCut = style({
  width: '40vw',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: '30vw',
    },
  },
})
