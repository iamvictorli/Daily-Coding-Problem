// Problem 95
//
// This problem was asked by Palantir.
//
// Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering.
// If there is not greater permutation possible, return the permutation with the lowest value/ordering.
//
// For example, the list [1,2,3] should return [1,3,2]. The list [1,3,2] should return [2,1,3]. The list [3,2,1] should return [1,2,3].
//
// Can you perform the operation without allocating extra memory (disregarding the input memory)?
//
// https://leetcode.com/problems/next-permutation/
// https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
 * Returns the next greater permutation in terms of lexicographic ordering
 * @param {number[]} nums
 * @return {number[]}
 */
function nextPermutation(nums) {
  let position = -1;
  let positionValue = 0;

  // from the end to start, find the first number which is not in increasing order
  // Example: [2, 3, 6, 5, 4, 1] is 3 (2nd element)
  // 1. If every element is already in increasing order, then that means this permutation is the last permutation of lexicographic ordering. So just reverse the array.
  // 2. Find the right most number which is greater than that element, and reverse their positions.
  // Reverse 3 and 4. [2, 4, 6, 5, 3, 1].
  // Last reverse numbers after found position. [2, 4, 1, 3, 5, 6]

  // Find first number not in ascending order from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) continue;
    if (nums[i] < nums[i + 1]) {
      position = i;
      positionValue = nums[i];
      break;
    }
  }

  // Every element is in increasing order from right to left
  if (position === -1) {
    reverse(nums, 0, nums.length - 1);
    return nums;
  }

  // Find right most element, which is greater than element. Reverse their positions
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > positionValue) {
      swap(nums, position, i);
      break;
    }
  }

  // Reverse found position to end of array
  reverse(nums, position + 1, nums.length - 1);
  return nums;
}

/**
 * Reverse nums array from start index to end index
 * @param {number[]} nums
 * @param {number} startIndex
 * @param {number} endIndex
 */
function reverse(nums, startIndex, endIndex) {
  while (startIndex < endIndex) {
    swap(nums, startIndex, endIndex);
    startIndex++;
    endIndex--;
  }
}

/**
 * Swap index1 and index2 from nums
 * @param {number[]} nums
 * @param {number} index1
 * @param {number} index2
 */
function swap(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

export default nextPermutation;
