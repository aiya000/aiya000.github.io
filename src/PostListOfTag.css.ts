import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const previews = style({
  alignContent: 'space-around',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      flexDirection: 'row',
    },
  },
})

export const preview = style({
  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: '40% !important',
      margin: '8px 16px !important',
    },
  },
})
