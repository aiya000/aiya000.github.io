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
  width: '70%',

  '@media': {
    [v.mediaMinWidth.pc]: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
  },
})

export const postPreviewsContainer = style({
  width: '100%',
})

export const profile = style({
  '@media': {
    [v.mediaMinWidth.pc]: {
      width: '20%',
    },
  },
})

export const postPreviews = style({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
})

export const postPreview = style({
  width: '80%',
  marginTop: 8,

  '@media': {
    [v.mediaMinWidth.sp]: {
      width: '100%',
    },

    [v.mediaMinWidth.pc]: {
      width: '90%',
    },
  },
})

export const viewAll = style({
  marginTop: 36,
  fontSize: 24,
})
