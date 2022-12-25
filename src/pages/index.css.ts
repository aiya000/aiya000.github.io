import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const container = style({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const logo = style({
  marginTop: 32,
  maxWidth: '70%',
  width: '50%',
})

export const blogName = style({
  fontSize: 24,

  '@media': {
    [v.mediaMinWidth.pc]: {
      fontSize: 48,
    },
  },
})
