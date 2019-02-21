// Problem 58
//
// This problem was asked by Amazon.
//
// An sorted array of integers was rotated an unknown number of times.
//
// Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.
//
// For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).
//
// You can assume all the integers in the array are unique.
//
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
//
// O(log N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
 * Find the index of the element in rotated sorted array.
 * @param {number[]} nums
 * @param {number} target
 * @return {number?}
 */
function searchRotatedArray(nums, target) {
  // a variation of binary search
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    // check sorted from low to mid
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // not sorted from low to mid. mid to high should be sorted, so check target in between mid to high
    else if (target > nums[mid] && target <= nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}

export default searchRotatedArray;
