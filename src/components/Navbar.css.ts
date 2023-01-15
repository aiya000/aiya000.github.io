import { style } from '@vanilla-extract/css'

import { zIndex } from '@/css/variables.css'
import { mediaMinWidth, color } from '@/css/variables.css'

export const navbar = style({
  alignItems: 'center',
  background: 'linear-gradient(#f0f8ff, #e6e6fa)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
})

export const logo = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
})

export const logoName = style({
  color: color.black,
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: 8,

  '@media': {
    [mediaMinWidth.tablet]: {
      fontSize: 16,
    },
  },
})

export const link = style({
  color: color.silver,
  fontWeight: 'bold',
  margin: '0 16px',
  textDecoration: 'none',

  ':hover': {
    color: color.black,
  },
})

export const menuButton = style({
  fontWeight: 'bold',
  padding: '8px 16px',
  border: `solid 2px ${color.silver}`,
  color: color.silver,
})

export const menuItems = style({
  alignItems: 'flex-start',
  backgroundColor: color.white,
  border: `solid 2px ${color.silver}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
  padding: '32px 8px',
  position: 'absolute',
  right: 16,
  zIndex: zIndex.front,
})

export const menuItem = style([
  link,
  {
    margin: '8px 64px 8px 8px',
    fontWeight: 'normal',
  },
])

export const point = style({
  color: color.silver,
})

export const linkText = style({
  marginLeft: 16,
  textDecoration: 'underline',
})
