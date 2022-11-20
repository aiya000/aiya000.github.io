import { style } from '@vanilla-extract/css'

import { mediaMinWidth, color } from '@/css/variables.css'

export const container = style({
  padding: 16,

  '@media': {
    [mediaMinWidth.tablet]: {
      padding: 64,
    },
  },
})

export const content = style({
  backgroundColor: color.white,
  padding: 8,
})
