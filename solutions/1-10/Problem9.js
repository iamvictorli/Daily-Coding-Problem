/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^SumNonAdjacent" }] */

// Problem 9
//
// This problem was asked by Airbnb.
//
// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
// Numbers can be 0 or negative.
//
// For example,
// [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
// [5, 1, 1, 5] should return 10, since we pick 5 and 5.
//
// Follow-up: Can you do this in O(N) time and constant space?
//
// O(N) Time Complexity
// O(1) Space Complexity
// N is the number of elements in the array

/**
 * Returns the largest sum of non-adjacent numbers
 * Each solution builds on the previous
 * @param {number[]} nums
 * @return {number}
 */
function SumNonAdjacent(nums) {
  // return SumNonAdjacentDP(nums);
  return SumNonAdjacentC(nums);
}

/**
 * Bottom Up Solution using a dp table. O(N) Time and Space Complexity
 * @param {number[]} nums
 * @return {number}
 */
function SumNonAdjacentDP(nums) {
  if (nums.length === 0) return 0;

  if (nums.length === 1) return Math.max(0, nums[0]);

  const dp = [];

  dp[0] = Math.max(0, nums[0]);
  dp[1] = Math.max(dp[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const sum = nums[i] + dp[i - 2];
    dp[i] = Math.max(dp[i - 1], sum);
  }
  return dp[dp.length - 1];
}

/**
 * Bottom Up Solution Constant Space O(N) Time and O(1) Space Complexity
 * @param {number[]} nums
 * @return {number}
 */
function SumNonAdjacentC(nums) {
  if (nums.length === 0) return 0;

  if (nums.length === 1) return Math.max(0, nums[0]);

  let prev = Math.max(0, nums[0]);
  let curr = Math.max(prev, nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const sum = nums[i] + prev;
    prev = curr;
    curr = Math.max(curr, sum);
  }
  return curr;
}

export default SumNonAdjacent;
