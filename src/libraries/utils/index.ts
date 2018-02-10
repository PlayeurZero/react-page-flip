type IClassConcatArgs = string | { [str: string]: boolean }

/**
 * Returns a string concatenated with given class.
 */
export const classConcat = (...args: IClassConcatArgs[]): string =>
  args.map((arg) => {
    if ('string' === typeof arg) { return arg }
    if ('object' === typeof arg) {
      return Object.keys(arg).filter((key) => arg[key] === true).join(' ')
    }
  }).filter((arg) => arg !== '').join(' ')

/**
 * Executes the function only if the delay has passed.
 * If the function is recalled before the delay is elapsed, the delay will be restarted.
 * @param callback
 * @param delay
 */
export const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timer

  return (...args) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback.apply(void 0, args)
    }, delay)
  }
}

/**
 * Executes the function will be called at most one time until the delay been passed.
 * @param callback
 * @param delay
 */
export const throttle = (callback: (...args: any[]) => void, delay: number) => {
  let last
  let timer

  return (...args) => {
    const now = new Date()

    if (last && now < last + delay) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        last = now
        callback.apply(void 0, args)
      }, delay)
    } else {
      last = now
      callback.apply(void 0, args)
    }
  }
}
