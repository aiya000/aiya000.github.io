import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const blogName = style({
  fontSize: 24,

  '@media': {
    [v.mediaMinWidth.pc]: {
      fontSize: 48,
    },
  },
})

export const blogEntry = style({
  backgroundColor: v.color.sea,
  border: `1px solid ${v.color.black}`,
  boxShadow: '1px 1px 0.5em black inset',
  margin: '16px 8px',
  padding: '16px 20px',
  width: '90%',
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

export const tags = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  marginTop: 8,
})

export const tag = style({
  alignItems: 'center',
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'row',
  margin: '0 8px',
})

export const tagImage = style({
  width: '1.25rem',
})

export const excerpt = style({
  marginTop: 16,
})

export const readMore = style({
  marginTop: 8,
})
