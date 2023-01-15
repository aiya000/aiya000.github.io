import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const icon = style({
  width: 100,
  borderRadius: 16,
  margin: '0 8px',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: 150,
    },
  },
})

export const container = style({
  alignItems: 'center',
  display: 'grid',
  justifyItems: 'center',
  padding: 16,
})

export const content = style({
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  borderRadius: 16,
  backgroundColor: v.color.white,
  padding: 20,
})
