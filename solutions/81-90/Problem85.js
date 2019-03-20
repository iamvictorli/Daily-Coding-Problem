// Problem 85
//
// This problem was asked by Facebook.
//
// Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.

/**
 * Return x if b is 1 and y if b is 0
 * @param {number} x
 * @param {number} y
 * @param {number} b
 * @return {number}
 */
function oneOrZero(x, y, b) {
  const mask = -b; // mask is either -1 or 0
  return (x & mask) | (y & ~mask);
}

export default oneOrZero;
