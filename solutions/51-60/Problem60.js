/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^subsetSum" }] */

// Problem 60
//
// This problem was asked by Facebook.
//
// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
//
// For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true,
// since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
//
// Given the multiset {15, 5, 20, 10, 35}, it would return false,
// since we can't split it up into two subsets that add up to the same sum.
//
// https://leetcode.com/problems/partition-equal-subset-sum/description/
// https://en.wikipedia.org/wiki/Partition_problem

/**
 * Returns whether nums can be partitioned into two subsets whose sums are the same
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  // 1. Get total sum
  // 2. Find if there is a subset equals half of total.

  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  // two same numbers added together is always even
  if (total % 2 === 1) return false;

  // find if a subset equals half of total.
  // If one subset equals half of total, the other numbers not included in subset sum is equal to half of total.
  total /= 2;

  // the same as Problem 42
  // https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem42.js

  // return subsetSum(nums, total);
  return subsetSumBetter(nums, total);
}

/**
 * Returns whether a subset that adds up to the target. Takes O(MN) Space. M is the length of nums and N is target
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function subsetSum(nums, target) {
  const dp = [...Array(nums.length)].map(() => Array(target + 1).fill(false));
  for (let r = 0; r < dp.length; r++) {
    dp[r][0] = true;
  }

  // set the first number
  if (nums[0] === target) return true;
  if (nums[0] <= target) dp[0][nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) return true;

    for (let j = 1; j <= target; j++) {
      // dp[i - 1][j] is the previous subset problem, when current num was not included. Not selecting nums[i]
      // dp[i - 1][j - num] is the previous subset problem to j - num. Selecting this nums[i].

      dp[i][j] = dp[i - 1][j]; // First, Choose to not select this nums[i]
      if (j - num >= 0) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - num]; // See if we should select nums[i]
      }
    }
  }

  return dp[nums.length - 1][target];
}

/**
 * Returns whether a subset that adds up to the target. Takes O(N) Space. N is target
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function subsetSumBetter(nums, target) {
  const dp = Array(target + 1).fill(false);

  dp[0] = true;
  // set the first number
  if (nums[0] === target) return true;
  if (nums[0] <= target) dp[nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) return true;

    // Have to go backwards from target, as we need to previous values first
    for (let j = target; j > 0; j--) {
      if (j - num >= 0) dp[j] = dp[j] || dp[j - num];
      else continue;
    }
  }
  return dp[target];
}

export default canPartition;
