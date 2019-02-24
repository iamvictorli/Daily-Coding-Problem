/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^uniquePaths" }] */

// Problem 62
//
// This problem was asked by Facebook.
//
// There is an N by M matrix of zeroes.
// Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner.
// You can only move right or down.
//
// For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:
//
// Right, then down
// Down, then right
// Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.
//
// https://leetcode.com/problems/unique-paths/description/
//
// O(NM) Time complexity
// O(S) Space complexity
// N is the number of rows, M is the number of columns, S is the smaller number of N and M.

/**
 * Count the number of ways of starting at the top-left corner and getting to the bottom-right corner in a N by M matrix. N rows by M columns.
 * Each solution builds on the previous
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function uniquePaths(n, m) {
  // return uniquePathsSol(n, m);
  return uniquePathsLessSpace(n, m);
}

/**
 * O(NM) Time and Space complexity solution
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function uniquePathsSol(n, m) {
  if (n <= 0 || m <= 0) return 0;
  if (n === 1 || m === 1) return 1;
  const dp = [...Array(n)].map(() => Array(m).fill(0));

  // for the top row and left most column, their cell can only be reached by 1
  for (let r = 0; r < dp.length; r++) {
    dp[0][r] = 1;
  }

  for (let c = 0; c < dp[0].length; c++) {
    dp[c][0] = 1;
  }

  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[r].length; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[n - 1][m - 1];
}

/**
 * O(NM) Time complexity and O(S) Space complexity. S the smaller number of N and M
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function uniquePathsLessSpace(n, m) {
  const shorter = Math.min(n, m);
  const larger = Math.max(n, m);

  const grid = Array(shorter).fill(1);
  for (let i = 1; i < larger; i++) {
    for (let j = 1; j < grid.length; j++) {
      const prevUp = grid[j];
      const prevBefore = grid[j - 1];
      grid[j] = prevUp + prevBefore;
    }
  }
  return grid[shorter - 1];
}

export default uniquePaths;
