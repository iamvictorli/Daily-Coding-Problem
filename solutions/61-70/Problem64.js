// Problem 64
//
// This problem was asked by Google.
//
// A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.
//
// Given N, write a function to return the number of knight's tours on an N by N chessboard.
//
// https://www.dailycodingproblem.com/blog/knights-tour/
//
// O(8 ^ N ^ 2) Time complexity
// O(N * N) Space complexity

/**
 * Returns the number of knight's tours on an N by N chessboard
 * @param {number} n
 * @return {number}
 */
function knightsTour(n) {
  let count = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      // Create a new board using the first move at r and c
      // -1 means the move has not been used
      const board = [...Array(n)].map(() => Array(n).fill(-1));
      board[r][c] = 0; // Mark for first move
      count += knightsTourHelper(board, [[r, c]], n);
    }
  }

  return count;
}

/**
 * Backtracking Recursive function to help calculate the knights tour on the board
 * @param {number[][]} board
 * @param {number[][]} tour
 * @param {number} n
 * @return {number}
 */
function knightsTourHelper(board, tour, n) {
  if (tour.length === n * n) return 1;

  let count = 0;
  const [lastR, lastC] = tour[tour.length - 1];
  const moves = validMoves(board, lastR, lastC, n);

  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i];
    tour.push([r, c]);
    board[r][c] = tour.length; // marked in board
    count += knightsTourHelper(board, tour, n);
    tour.pop();
    board[r][c] = -1;
  }
  return count;
}

/**
 * Returns all the valid moves a knight can move from r and c
 * @param {number[][]} board
 * @param {number} r
 * @param {number} c
 * @param {number} n
 * @return {number[][]}
 */
function validMoves(board, r, c, n) {
  const deltas = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
  ];

  const moves = [];
  for (let i = 0; i < deltas.length; i++) {
    const newR = r + deltas[i][0];
    const newC = c + deltas[i][1];
    if (isValidMove(board, newR, newC, n)) moves.push([newR, newC]);
  }
  return moves;
}

/**
 * Checks for a valid move on the board with r and c
 * @param {number[][]} board
 * @param {number} r
 * @param {number} c
 * @param {number} n
 * @return {boolean}
 */
function isValidMove(board, r, c, n) {
  return r >= 0 && r < n && c >= 0 && c < n && board[r][c] === -1;
}

export default knightsTour;
