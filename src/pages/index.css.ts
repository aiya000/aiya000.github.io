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

export const blogEntry = style({
  marginTop: 8,
  width: '100%',
})

export const blogTitle = style({
  margin: '4px 0 8px 0',
  padding: 0,
})

export const blogDate = style({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
})

export const window = style({
  border: `1px solid ${v.color.black}`,
  padding: '16px 20px',
  boxShadow: '1px 1px 0.5em black inset',
  backgroundColor: v.color.sea,
})

export const clock = style({
  width: 32,
})

export const category = style({
  background: `linear-gradient(90deg, ${v.color.darker}, ${v.color.darker})`,
  borderRadius: 16,
  color: v.color.sea,
  margin: '0 8px',
  padding: '0 16px',
})
