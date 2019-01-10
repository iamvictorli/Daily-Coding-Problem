/**
 *
 * Problem 4
 *
 * This problem was asked by Stripe.
 *
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 *
 * You can modify the input array in-place.
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * O(N) Time complexity
 * O(1) Space complexity
 * N is the number of elements in the array
 *
 */

/**
 *
 * Overview:
 * 1. Partition the positive numbers on left side and 0s/negative to left side
 * 2. Mark positive elements indices as negative if valid
 * 3. Find first positive index that element is positive
 *
 * Explanation:
 * The paritioning gets rid of the 0s and negative numbers
 * nums[0 through k - 1] will have positive integers
 * The missing number has to be somewhere the range of 1 to k + 1, NOT TALKING ABOUT NUMS ELEMENTS
 * Mark the index of the value because it is not missing
 *
 * For example:
 * [50, 1, 4, 2, -1] Already Parititioned
 * We only care about the positive numbers, so k is 4. 4 positive numbers
 * The missing number has to be in the range of 1 and 5. (4 Positive numbers + 1)
 *
 * Iterate through the index values to k
 * 50: Not in the range of 1 and 5. Do nothing
 * 1: Is in the range of 1 and 5, set index 0 (1 - 1) to negative if it isnt. [-50, 1, 4, 2, -1]
 * 4: Is in the range of 1 and 5, set index 3 (4 - 1) to negative if it isnt. [-50, 1, 4, -2, -1]
 * 2: Is in the range of 1 and 5, set index 1 (2 - 1) to negative if it isnt. [-50, -1, 4, -2, -1]
 *
 * With [-50, -1, 4, -2, -1]
 * The index of 2 is positive, so the missing number is 3 (2 + 1)
 *
 * [1, 2, 0] would have k = 2, and turns into [-1, -2, 0]. 3 is the missing number
 *
 */

/**
 * Returns the first positive integer in an array. 0 does not count as a positive integer
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositiveInteger(nums) {
  if (nums.length === 0) return 1;
  const k = partition(nums, 0, nums.length - 1, 0) + 1;

  let result = k;
  for (let i = 0; i < k; i++) {
    const indexValue = Math.abs(nums[i]);
    if (indexValue <= k) {
      // turn negative
      if (nums[indexValue - 1] > 0)
        nums[indexValue - 1] = 0 - nums[indexValue - 1];
    }
  }

  // The first positive index indicates the missing number
  // Could iterate through nums.length, but dont have to since k through nums.length are negative already numbers
  for (let i = 0; i < k; i++) {
    if (nums[i] > 0) {
      result = i;
      break;
    }
  }
  return result + 1; // plus 1 because arrays are zero indexed
}

/**
 * Partitions the array with positives on the left side and negative numbers/0 on the right side.
 * Return index of the last positive number
 * Example:
 * [3, 4, -1, 1] => [3, 4, 1, -1] Returns 2
 * [0, 6, -1, 5, 4] => [4, 6, 5, -1, 0] Returns 2
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} pivotValue
 * @return {number}
 */
function partition(nums, left, right, pivotValue) {
  while (left <= right) {
    while (nums[left] > pivotValue) left++;
    while (nums[right] < pivotValue) right--;

    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  return right;
}

/**
 * Swap two indicies in an array
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export default firstMissingPositiveInteger;
