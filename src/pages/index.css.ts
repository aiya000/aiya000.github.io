import { style } from '@vanilla-extract/css'

import * as v from '@/css/variables.css'

export const container = style({
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

export const body = style({
  width: '100%',

  '@media': {
    [v.mediaMinWidth.pc]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
    },
  },
})

export const postPreviews = style({
  width: '100%',

  '@media': {
    [v.mediaMinWidth.pc]: {
      gap: 36,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '76%',
    },
  },
})

export const profile = style({
  '@media': {
    [v.mediaMinWidth.pc]: {
      width: '20%',
    },
  },
})

export const postPreview = style({
  '@media': {
    [v.mediaMinWidth.pc]: {
      width: 500,
    },
  },
})

export const viewAll = style({
  marginTop: 36,
  fontSize: 24,
})
