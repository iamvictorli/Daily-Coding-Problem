// Problem 18
//
// This problem was asked by Google.
//
// Given an array of integers and a number k, where 1 <= k <= length of the array,
// compute the maximum values of each subarray of length k.
//
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
//
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
//
// Do this in O(n) time and O(k) space. You can modify the input array in-place and
// you do not need to store the results. You can simply print them out as you compute them.
//
// https://leetcode.com/problems/sliding-window-maximum/description/
// https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
//
// O(N) Time complexity
// O(K) Space complexity
// N is the number of elements in the array, K is the window size

/**
 * Returns the maximum values of each subarray of length k
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubArrayLengthK(nums, k) {
  if (k <= 0) return [];

  const result = [];

  const deque = []; // deque stores the index of numbers
  for (let i = 0; i < nums.length; i++) {
    // checks if the deque is not empty and removes the number that is outside the deque
    // for example: [5, 4, 3, 1] k = 3, when i is 3.
    // Deque is [5, 4, 3] before. Remove 5 because out of window
    // Makes deque always of size k
    if (deque.length !== 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // checks if the deque is not empty and pops from the deque smaller or equal numbers
    // deque[deque.length - 1] is the last index
    while (deque.length !== 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}

export default maxSubArrayLengthK;
