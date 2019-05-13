// Problem 75
//
// This problem was asked by Microsoft.
//
// Given an array of numbers, find the length of the longest increasing subsequence in the array.
// The subsequence does not necessarily have to be contiguous.
//
// For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
// the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
//
// https://leetcode.com/problems/longest-increasing-subsequence/
// https://dailycodingproblem.com/blog/longest-increasing-subsequence/
//
// Best solution is N Log N using a variation of binary search
//
// O(N^2) Time complexity
// O(N) Space complexity
// N is the length of the array

/**
 * Returns the length of the longest increasing subsequence in the array
 * @param {number[]} nums
 * @return {number}
 */
function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  const dp = [];
  let longestSubsequenceLength = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let longestSubsequenceSoFar = 1;
    for (let j = 0; j < i; j++) {
      // we need to compare index of j to our current number
      // this comparison means there is an increasing subsequence
      if (nums[j] < num) {
        const currLongestSubsequence = dp[j];
        longestSubsequenceSoFar = Math.max(
          longestSubsequenceSoFar,
          currLongestSubsequence + 1
        );
      }
    }
    // we want to update dp[i]
    dp[i] = longestSubsequenceSoFar;
    longestSubsequenceLength = Math.max(
      longestSubsequenceLength,
      longestSubsequenceSoFar
    );
  }
  return longestSubsequenceLength;
}

export default longestIncreasingSubsequence;
