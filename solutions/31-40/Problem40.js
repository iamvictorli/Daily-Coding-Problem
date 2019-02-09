// Problem 40
//
// This problem was asked by Google.
//
// Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.
//
// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.
//
// Do this in O(N) time and O(1) space.
//
// https://leetcode.com/problems/single-number-ii/description/

function singleNumber(nums) {
  let x1 = 0;
  let x2 = 0;
  let mask = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    x2 ^= x1 & num;
    x1 ^= num;
    mask = ~(x1 & x2);
    x2 &= mask;
    x1 &= mask;
  }
  return x1;
}

export default singleNumber;
