import { style } from '@vanilla-extract/css'

export const navbar = style({
  alignItems: 'center',
  background: 'linear-gradient(#f0f8ff, #ffffff)',
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
})

export const logoName = style({
  fontWeight: 'bold',
})

export const link = style({
  color: '#696969',
  fontWeight: 'bold',
  marginLeft: 16,
  textDecoration: 'none',

  ':hover': {
    color: '#000000',
  },
})
