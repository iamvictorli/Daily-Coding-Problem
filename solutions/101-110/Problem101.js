// Problem 101
//
// This problem was asked by Alibaba.
//
// Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.
//
// A solution will always exist. See Goldbach’s conjecture.
//
// Example:
//
// Input: 4
// Output: 2 + 2 = 4
// If there are more than one solution possible, return the lexicographically smaller solution.
//
// If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then
//
// [a, b] < [c, d]
// If a < c OR a==c AND b < d.
//
// O(N) Time complexity
// O(N) Space complexity

/**
 * Return two prime numbers whose sum will be equal to the given number
 * @param {number} n
 * @return {[number, number]}
 */
function primeSumPair(n) {
  // Get all prime numbers from 2 to n
  // for each of the prime numbers, find the first pair that sums to n

  const primeArr = Array(n + 1).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;

  for (let i = 2; i < primeArr.length; i++) {
    if (primeArr[i]) {
      for (let j = 2; i * j <= n; j++) {
        primeArr[i * j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (!primeArr[i]) continue;
    const difference = n - i;
    if (primeArr[difference]) {
      return [i, difference];
    }
  }

  return [-1, -1];
}

export default primeSumPair;
