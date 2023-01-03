import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

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
})

export const tag = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  margin: '0 12px',
})

export const tagImage = style({
  width: '1.25rem',
})

export const tagLink = style({
  color: v.color.black,
  marginLeft: 4,
  textDecoration: 'none',
})

export const excerpt = style({
  fontSize: 16,
  marginTop: 16,
  maxHeight: 300,
  overflowY: 'hidden',
})

export const readMore = style({
  marginTop: 8,
})
