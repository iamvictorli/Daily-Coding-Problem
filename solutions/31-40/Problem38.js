// Problem 38
//
// This problem was asked by Microsoft.
//
// You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other.
// i.e. no two queens share the same row, column, or diagonal.
//
// https://leetcode.com/problems/n-queens-ii/description/
//
// O(N!) Time complexity
// O(N) Space complexity
// N is the number of queens

/**
 * Returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other.
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  // col represents the columns that are taken
  // tlbr represents the \ diagonals that are taken
  // trbl represents the / diagonals that are taken
  const col = Array(n).fill(false);
  const tlbr = Array(2 * n + 1).fill(false); // top left -> bottom right
  const trbl = Array(2 * n + 1).fill(false); // top right -> bottom left
  return helper(0, n, col, tlbr, trbl);
}

/**
 * Recursive helper function
 * @param {number} row
 * @param {number} n
 * @param {number} col
 * @param {boolean[]} tlbr
 * @param {boolean[]} trbl
 * @return {number}
 */
function helper(row, n, col, tlbr, trbl) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (!col[i] && !tlbr[n - 1 - row + i] && !trbl[row + i]) {
      if (row === n - 1) {
        result++;
      } else {
        // choose
        col[i] = true;
        tlbr[n - 1 - row + i] = true;
        trbl[row + i] = true;

        // explore
        result += helper(row + 1, n, col, tlbr, trbl);

        // unchoose
        col[i] = false;
        tlbr[n - 1 - row + i] = false;
        trbl[row + i] = false;
      }
    }
  }
  return result;
}

export default totalNQueens;
