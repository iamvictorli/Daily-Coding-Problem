// Problem 54
//
// This problem was asked by Dropbox.
//
// Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits.
// The objective is to fill the grid with the constraint that every row, column, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.
//
// Implement an efficient sudoku solver.
//
// https://leetcode.com/problems/sudoku-solver/description/
//
// O(9 ^ M) Time complexity
// O(M) Space complixity
// M is the number of empty squares in the sudoku board

/**
 * Soduku Solver
 * @param {number[][]} board
 */
function sudokuSolve(board) {
  solve(board);
}

function solve(board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== '.') continue;

      for (let i = 1; i <= 9; i++) {
        const num = String(i);
        if (isValid(board, r, c, num)) {
          board[r][c] = num;

          if (solve(board)) return true;
          board[r][c] = '.';
        }
      }
      return false;
    }
  }
  return true;
}

function isValid(board, r, c, num) {
  const regionRow = 3 * Math.floor(r / 3);
  const regionCol = 3 * Math.floor(c / 3);

  for (let i = 0; i < 9; i++) {
    if (board[i][c] === num) return false; // check row
    if (board[r][i] === num) return false; // check col

    const squareRow = regionRow + Math.floor(i / 3);
    const squareCol = regionCol + (i % 3);
    if (board[squareRow][squareCol] === num) return false;
  }
  return true;
}

export default sudokuSolve;
