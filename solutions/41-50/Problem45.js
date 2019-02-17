// Problem 45
//
// This problem was asked by Two Sigma.
//
// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
//
// https://leetcode.com/problems/implement-rand10-using-rand7/description/
//
// Non deterministic, can run forever
// O(1) Space complexity

/**
 * Returns an integer from 1 to 5 (inclusive) with uniform probability
 * @return {number}
 */
function rand5() {
  return Math.floor(Math.random() * 5) + 1;
}

/**
 * Returns an integer from 1 to 25 using rand5
 */
function rand25() {
  return 5 * (rand5() - 1) + (rand5() - 1);
}

/**
 * Returns an integer from 1 to 7 (inclusive) using rand5
 * @return {number}
 */
function rand7() {
  let r = 21;
  while (r >= 21) r = rand25();
  return (r % 7) + 1;
}

export default rand7;
