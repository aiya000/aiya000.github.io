import { globalStyle } from '@vanilla-extract/css'
import { mediaMinWidth } from '@/css/variables.css'

globalStyle('html', {
  '@media': {
    [mediaMinWidth.sp]: {
      fontSize: 16,
    },
    [mediaMinWidth.tablet]: {
      fontSize: 20,
    },
    [mediaMinWidth.pc]: {
      fontSize: 22,
    },
  },
})

globalStyle('body', {
  background: 'linear-gradient(90deg, #2c3d4e, #231917)',
  margin: 0,
})

globalStyle('a', {
  color: 'chocolate',
  textDecoration: 'underline dotted chocolate',
})

globalStyle('p', {
  overflowWrap: 'break-word',
})
