/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^numIslands" }] */

// Problem 84
//
// This problem was asked by Amazon.
//
// Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.
//
// For example, this matrix has 4 islands.
//
// 1 0 0 0 0
// 0 0 1 1 0
// 0 1 1 0 0
// 0 0 0 0 0
// 1 1 0 0 1
// 1 1 0 0 1
//
// https://leetcode.com/problems/number-of-islands/
//
// O(MN) Time complexity
// O(P) Space complexity
// M is number of rows in matrix, N is the number of columns in matrix, P is the number of islands in matrix

/**
 * return the number of islands in the matrix
 * @param {number[][]} matrix
 * @return {number}
 */
function numIslands(matrix) {
  // return numIslandsDFS(matrix);
  return numIslandsBFS(matrix);
}

/**
 * Depth first search approach
 * @param {number[][]} matrix
 * @return {number}
 */
function numIslandsDFS(matrix) {
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        // perform dfs on cell
        numIslandsDFSHelper(matrix, r, c);
        count++;
      }
    }
  }
  return count;
}

/**
 * Depth first search helper function
 * @param {number[][]} matrix
 * @return {number}
 */
function numIslandsDFSHelper(matrix, r, c) {
  if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) return;
  if (matrix[r][c] === 0) return;

  // set to visited
  matrix[r][c] = 0;
  numIslandsDFSHelper(matrix, r - 1, c);
  numIslandsDFSHelper(matrix, r + 1, c);
  numIslandsDFSHelper(matrix, r, c - 1);
  numIslandsDFSHelper(matrix, r, c + 1);
}

/**
 * Breadth first search approach
 * @param {number[][]} matrix
 * @return {number}
 */
function numIslandsBFS(matrix) {
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        numIslandsBFSHelper(matrix, r, c);
        count++;
      }
    }
  }
  return count;
}

/**
 * Breadth first search helper function
 * @param {number[][]} matrix
 * @return {number}
 */
function numIslandsBFSHelper(matrix, startR, startC) {
  const queue = [];
  queue.push([startR, startC]);

  while (queue.length !== 0) {
    const cell = queue.shift();
    const [r, c] = cell;
    if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) continue;
    if (matrix[r][c] === 0) continue;

    // set to visited
    matrix[r][c] = 0;
    queue.push([r - 1, c]);
    queue.push([r + 1, c]);
    queue.push([r, c - 1]);
    queue.push([r, c + 1]);
  }
}

export default numIslands;
