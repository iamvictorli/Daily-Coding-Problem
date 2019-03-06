// Problem 70
//
// This problem was asked by Microsoft.
//
// A number is considered perfect if its digits sum up to exactly 10.
//
// Given a positive integer n, return the n-th perfect number.
//
// For example, given 1, you should return 19. Given 2, you should return 28.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the nth number

/**
 * Returns the nth perfect number which digits sum up to exactly 10
 * @param {number} n
 * @return {number}
 */
function nthPerfectNumber(n) {
  let i = 0;
  let multiple = 1; // multiples of 9, their digits sum is always a multiple of 9.
  while (i < n) {
    multiple++;
    const num = multiple * 9 + 1;
    if (perfect(num)) {
      i++;
    }
  }
  return multiple * 9 + 1;
}

/**
 * Returns if the number digits sum up to 10
 * @param {number} num
 * @return {boolean}
 */
function perfect(num) {
  let total = 0;
  while (num !== 0 && total < 10) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total === 10;
}

export default nthPerfectNumber;
