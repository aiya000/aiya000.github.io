import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const h1 = style(v.h1)

export const myLogo = style({
  borderRadius: 8,
  marginLeft: 16,
})
