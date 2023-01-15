import { style, globalStyle } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const entry = style({
  backgroundColor: v.color.sea,
  border: `1px solid ${v.color.black}`,
  boxShadow: '1px 1px 0.5em black inset',
  padding: '16px 20px',
})

export const title = style({
  fontSize: v.fontSize.sp + 4,
  margin: '4px 0 8px 0',
  overflowWrap: 'break-word',
  padding: 0,

  '@media': {
    [v.mediaMinWidth.tablet]: {
      fontSize: v.fontSize.pc + 4,
    },
  },
})

export const date = style({
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
  flexWrap: 'wrap',
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
  fontSize: v.fontSize.sp,
  marginTop: 16,
  maxHeight: 500,
  overflowY: 'hidden',

  '@media': {
    [v.mediaMinWidth.tablet]: {
      fontSize: v.fontSize.pc,
    },
  },
})

globalStyle(`${excerpt} > div > h1`, {
  ...v.globalH1,
  fontSize: v.globalH1.fontSize * 0.8,
  marginTop: 0,
})
globalStyle(`${excerpt} > div > h1:before`, v.globalH1Before)

globalStyle(`${excerpt} > div > h2`, {
  ...v.globalH2,
  fontSize: v.globalH2.fontSize * 0.8,
  marginTop: 0,
})
globalStyle(`${excerpt} > div > h2:before`, v.globalH2Before)

export const readMore = style({
  marginTop: 8,
})
