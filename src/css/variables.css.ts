/**
 * `@media (min-width: x)` for devices.
 *
 * Example:
 * ```typescript
 * globalStyle('html', {
 *   '@media': {
 *     [mediaMinWidth.sp]: {
 *       fontSize: 22,
 *     },
 *     [mediaMinWidth.tablet]: {
 *       fontSize: 20,
 *     },
 *     [mediaMinWidth.pc]: {
 *       fontSize: 16,
 *     },
 *   },
 * })
 * ```
 */
export const mediaMinWidth = {
  /**
   * hi-res laptops and desktops.
   */
  pc: '(min-width: 1024px)',

  /**
   * portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
   */
  tablet: '(min-width: 640px)',

  /**
   * smartphones, iPhone, portrait 480x320 phones.
   */
  sp: '(min-width: 320px)',
} as const

/**
 * Theme.
 */
export const color = {
  black: '#000000',
  blue: '#b0c4de',
  dark: '#2c3d4e',
  darker: '#231917',
  lighter: '#cdcdcd',
  sea: '#eff6fe',
  silver: '#696969',
  white: '#ffffff',
} as const

/**
 * <h1>text</h1>
 * to
 * ■ text
 * ^^ this!
 *
 * ```typescript
 * import { globalStyle } from '@vanilla-extract/css'
 * import * as v from '@/css/variables.css'
 * ```
 *
 * Should use with [[globalH1Before]].
 */
export const globalH1 = {
  fontSize: 24,
  paddingLeft: 16,
  position: 'relative',
  '@media': {
    [mediaMinWidth.pc]: {
      fontSize: 30,
    },
  },
} as const

/**
 * A :before part of [[globalH1]].
 */
export const globalH1Before = {
  background: color.black,
  content: '',
  height: '100%',
  left: 0,
  position: 'absolute',
  width: 4,
} as const

/**
 * <h1>text</h1>
 * to
 * ■ text
 * ^^ this!
 *
 * ```typescript
 * import { style } from '@vanilla-extract/css'
 * import * as v from '@/css/variables.css'
 * export const h1 = style(v.h1)
 * ```
 */
export const h1 = {
  ...globalH1,
  ':before': {
    ...globalH1Before,
  },
} as const

/**
 * Simular to [[globalH1]].
 */
export const globalH2 = {
  ...globalH1,
  fontSize: 20,

  '@media': {
    [mediaMinWidth.pc]: {
      fontSize: 26,
    },
  },
} as const

export const globalH2Before = {
  ...globalH1Before,
  width: 8,
} as const

/**
 * Simular to [[h1]].
 */
export const h2 = {
  ...globalH2,
  ':before': {
    ...globalH2Before,
  },
} as const

export const zIndex = {
  /**
   * Most front.
   */
  front: 100,
} as const
