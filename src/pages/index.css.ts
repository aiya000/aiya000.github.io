import { style } from '@vanilla-extract/css'

import { mediaMinWidth } from '@/css/variables.css'

export const container = style({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const logo = style({
  width: '90%',
})

export const blogName = style({
  fontSize: 32,

  '@media': {
    [mediaMinWidth.pc]: {
      fontSize: 48,
    },
  },
})
