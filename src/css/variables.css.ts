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
