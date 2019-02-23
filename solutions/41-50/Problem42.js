// Problem 42
//
// This problem was asked by Google.
//
// Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k.
// If such a subset cannot be made, then return null.
//
// Integers can appear more than once in the list. You may assume all numbers in the list are positive.
//
// For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
//
// O(MN) Time complexity
// O(MN) Space complexity
// M is the number of elements in the array and N is the target

// Similar to the Coin Change Problem: https://leetcode.com/problems/coin-change/description/

/**
 * Returns a subset that adds up to the target. If such a subset cannot be made, then return null
 * Result is in relative order, if multiple subsets are possible, returns first subset or if there is a number that is equal to target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]?}
 */
function subsetSum(nums, target) {
  if (nums.length === 0) return null;

  const dp = [...Array(nums.length)].map(() => Array(target + 1).fill(false));

  for (let r = 0; r < dp.length; r++) {
    dp[r][0] = true;
  }

  // set the first number of nums
  if (nums[0] <= target) dp[0][nums[0]] = true;
  if (nums[0] === target) return [nums[0]];

  // iterate through nums, starting at the first index
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) return [num];
    // iterate through all the subsets of 1...target
    for (let j = 1; j <= target; j++) {
      // dp[i - 1][j] is the previous subset problem, when current num was not included. Not selecting nums[i]
      // dp[i - 1][j - num] is the previous subset problem to j - num. Selecting this nums[i].

      dp[i][j] = dp[i - 1][j]; // First, Choose to not select this nums[i]
      if (j - num >= 0) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - num]; // See if we should select nums[i]
      }
    }
  }

  // no subset sum
  if (!dp[nums.length - 1][target]) return null;

  const subset = [];
  let column = target;
  let row = nums.length - 1;

  while (column !== 0) {
    const num = nums[row];
    if (column === num) {
      subset.unshift(num);
      break;
    }

    if (dp[row - 1][column]) row--;
    else {
      subset.unshift(num);
      column -= num;
    }
  }

  return subset;
}

export default subsetSum;
