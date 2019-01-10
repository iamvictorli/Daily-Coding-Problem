/**
 *
 * Problem 5
 *
 * This problem was asked by Jane Street.
 *
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 *
 * Given this implementation of cons:
 *
 * function cons(a, b) {
 *   function pair(cb) {
 *     return cb(a, b);
 *   }
 *   return pair;
 * }
 *
 * Implement car and cdr.
 *
 */

/**
 * Constructs a pair and returns a callback to be used for the pair
 * @param {number} a
 * @param {number} b
 * @return {function}
 */
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}

/**
 * Returns the first element of the pair
 * @param {function} fn
 * @return {number}
 */
function car(fn) {
  // eslint-disable-next-line
  function callThisFunction(x, y) {
    return x;
  }

  return fn(callThisFunction);
}

/**
 * Returns the second element of the pair
 * @param {function} fn
 * @return {number}
 */
function cdr(fn) {
  function callThisFunction(x, y) {
    return y;
  }

  return fn(callThisFunction);
}

export { cons, car, cdr };
