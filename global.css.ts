import { globalStyle } from '@vanilla-extract/css'
import { mediaMinWidth } from '@/css/variables.css'

globalStyle('html', {
  '@media': {
    [mediaMinWidth.sp]: {
      fontSize: 22,
    },
    [mediaMinWidth.tablet]: {
      fontSize: 20,
    },
    [mediaMinWidth.pc]: {
      fontSize: 16,
    },
  },
})

globalStyle('body', {
  background: 'linear-gradient(90deg, #2c3d4e, #231917)',
  margin: 0,
})
