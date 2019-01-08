/**
 *
 * Problem 1
 *
 * This problem was recently asked by Google.
 *
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 *
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 *
 * Bonus: Can you do this in one pass?
 *
 * https://leetcode.com/problems/two-sum/description/
 * https://www.youtube.com/watch?v=XKu_SEDAykw
 *
 * O(N) Time complexity
 * O(N) Space complexity
 * N is the number of elements in the array
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function twoSum(nums, target) {
  const differenceSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;
    if (differenceSet.has(difference)) {
      return true;
    }
    differenceSet.add(num);
  }
  return false;
}

export default twoSum;
