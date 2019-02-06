// Problem 37
//
// This problem was asked by Google.
//
// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
//
// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
//
// You may also use a list or array to represent a set.
//
// https://leetcode.com/problems/subsets/description/
// https://leetcode.com/problems/subsets-ii/description/
//
// O(2^N) Time and space complexity
// N is the number of elements in the array

/**
 * Returns the power set of an array
 * @param {number[]} nums
 * @return {[number[]]}
 */
function powerSet(nums) {
  const list = [];
  nums.sort((a, b) => a - b);
  helper(nums, list, [], 0);
  return list;
}

/**
 * Backtracking recursive function helper
 * @param {number[]} nums
 * @param {[number[]]} list
 * @param {number[]} listSoFar
 * @param {number} position
 */
function helper(nums, list, listSoFar, position) {
  list.push([...listSoFar]);
  if (position >= nums.length) return;

  for (let i = position; i < nums.length; i++) {
    if (i > position && nums[i] === nums[i - 1]) continue;

    const num = nums[i];
    listSoFar.push(num);
    helper(nums, list, listSoFar, i + 1);
    listSoFar.pop();
  }
}

export default powerSet;
