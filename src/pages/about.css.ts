import { style } from '@vanilla-extract/css'

import { headingDotStyle } from '@/css/variables.css'

export const heading = style({
  ...headingDotStyle.h1,
  fontSize: 24,

  ':before': {
    ...headingDotStyle.h1Before,
  },
})
