// Problem 106
//
// This problem was asked by Pinterest.
//
// Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.
//
// For example, [2, 0, 1, 0] returns true while [1, 1, 0, 1] returns false.
//
// https://leetcode.com/problems/jump-game/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
 * Returns whether you can reach to the last index starting at index 0
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let maxLocationIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxLocationIndex) return false;
    maxLocationIndex = Math.max(maxLocationIndex, nums[i] + i);
  }
  return true;
}

export default canJump;
