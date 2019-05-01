// Problem 102
//
// This problem was asked by Lyft.
//
// Given a list of integers and a number K, return which contiguous elements of the list sum to K.
//
// For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4].
//
// O(N) Time complexity
// O(N) Space complexity

/**
 * Returns contiguous elements of the list sum to K.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function contiguousSum(nums, k) {
  if (k === 0) return [];

  let currSum = 0;
  const map = new Map();
  // set the current sum and index at map

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    const difference = currSum - k;

    if (difference === 0) {
      return nums.slice(0, i + 1);
    }

    // when we find the difference in the map.
    // this means we could remove 0 to index of difference
    if (map.has(difference)) {
      const startIndex = map.get(difference);
      return nums.slice(startIndex + 1, i + 1);
    }

    map.set(currSum, i);
  }

  return [];
}

export default contiguousSum;
