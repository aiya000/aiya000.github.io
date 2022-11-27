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
  light: '#b0c4de',
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
 * export const heading = style({
 *   ...headingDotStyle.h1,
 *   fontSize: 24,
 *   ':before': {
 *     ...headingDotStyle.h1Before,
 *   },
 * })
 *
 * globalStyle('h1', headingDotStyle.h1)
 * globalStyle('h1:before', headingDotStyle.h1Before)
 * ```
 */
export const headingDotStyle = (() => {
  const heading = {
    paddingLeft: 16,
    position: 'relative',
  } as const

  const makeDot = (dotWidth: number) =>
    Object.freeze({
      background: color.black,
      content: '',
      height: '100%',
      left: 0,
      position: 'absolute',
      width: dotWidth,
    })

  return {
    h1: heading,
    h1Before: makeDot(4),
    h2: heading,
    h2Before: makeDot(8),
  } as const
})()
