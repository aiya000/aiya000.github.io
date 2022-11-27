import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const heading1 = style({
  ...v.headingDotStyle.h1,
  fontSize: 24,

  ':before': {
    ...v.headingDotStyle.h1Before,
  },
})

export const heading2 = style({
  ...v.headingDotStyle.h2,
  fontSize: 20,

  ':before': {
    ...v.headingDotStyle.h2Before,
  },
})

export const text = style({
  border: `solid 1px ${v.color.black}`,
  padding: 8,
  margin: '32px 0',
})

export const myIcons = style({
  display: 'flex',
  marginTop: 8,
  flexWrap: 'wrap',
})

export const myLatestIcon = style({
  width: 100,
  borderRadius: 16,
  margin: '0 8px',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      width: 150,
    },
  },
})

export const myOlderIcon = style({
  width: 40,
  borderRadius: 160,
  margin: '0 4px',
})

export const myIcon = style({
  borderRadius: 8,
  marginLeft: 16,
})
