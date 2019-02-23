// Problem 61
//
// This problem was asked by Google.
//
// Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.
//
// Do this faster than the naive method of repeated multiplication.
//
// For example, pow(2, 10) should return 1024.
//
// https://leetcode.com/problems/powx-n/description/
//
// O(log N) Time complexity
// O(log N) Space complexity
// N is the exponent

/**
 * Implements the pow(x, y) function where x and y are integers and returns x ^ y
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function pow(x, y) {
  if (x === 1) return y;
  if (x === 0) return 0;
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y === -1) return 1 / x;

  const memo = new Map();
  memo.set(1, x);

  const exponent = Math.abs(y);
  const power = powHelper(x, exponent, memo);
  return y < 0 ? 1 / power : power;
}

/**
 * Recursive power helper with memo
 * @param {number} x
 * @param {number} y
 * @param {Map<number, number>} memo
 * @return {number}
 */
function powHelper(x, y, memo) {
  if (y === 1) return x;
  if (memo.has(y)) return memo.get(y);

  const half = Math.floor(y / 2);
  const halfResult = powHelper(x, half, memo);
  memo.set(y, halfResult);

  if (y % 2 === 1) return halfResult * halfResult * x;
  return halfResult * halfResult;
}

export default pow;
