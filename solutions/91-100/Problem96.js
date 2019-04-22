// Problem 96
//
// This problem was asked by Microsoft.
//
// Given a number in the form of a list of digits, return all possible permutations.
//
// For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
//
// https://leetcode.com/problems/permutations/
//
// O(N!) Time complexity
// O(N) Space complexity
// N is the number of elements in the array

/**
 * Return all possible permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
function permutation(nums) {
  if (nums.length === 0) return [];
  const list = [];
  backtrack(nums, list, [], new Set());
  return list;
}

/**
 * Recursive backtracking helper function
 * @param {number[]} nums
 * @param {number[][]} list
 * @param {number[]} listSoFar
 * @param {Set<number>} set
 */
function backtrack(nums, list, listSoFar, set) {
  if (listSoFar.length === nums.length) {
    list.push([...listSoFar]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) continue;

    // choose
    listSoFar.push(num);
    set.add(num);

    // explore
    backtrack(nums, list, listSoFar, set);

    // unchoose
    listSoFar.pop();
    set.delete(num);
  }
}

export default permutation;
