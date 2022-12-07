import { globalStyle, style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

globalStyle('h1', v.globalH1)
globalStyle('h1:before', v.globalH1Before)
globalStyle('h2', v.globalH2)
globalStyle('h2:before', v.globalH2Before)

export const circleCut = style({
  width: '40vw',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: '30vw',
    },
  },
})
