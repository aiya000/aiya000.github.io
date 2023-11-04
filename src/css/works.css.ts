import { globalStyle, style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const circleCut = style({
  width: '40vw',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: '30vw',
    },
  },
})
