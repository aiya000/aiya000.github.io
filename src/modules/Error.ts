/**
 * `throw new Error` as Expression.
 */
export function raise(message: string): never {
  throw new Error(message)
}
