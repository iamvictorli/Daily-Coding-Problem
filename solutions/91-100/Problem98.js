// Problem 98
//
// This problem was asked by Coursera.
//
// Given a 2D board of characters and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// For example, given the following board:
//
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.
//
// https://leetcode.com/problems/word-search/
//
// O(MN*4^S) Time complexity
// O(MN) Space complexity
// M and N are the number of rows and columns. S is the length of the word

/**
 * Checks to see if the word can be constructed from the board
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exists(board, word) {
  if (word.length === 0) return true;
  const visited = board.map(r => r.map(() => false));

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (search(board, r, c, word, 0, visited)) return true;
    }
  }

  return false;
}

/**
 * depth first search helper function for searching through board
 * @param {string[][]} board
 * @param {number} r
 * @param {number} c
 * @param {string} word
 * @param {number} index
 * @param {boolean[][]} visited
 * @return {boolean}
 */
function search(board, r, c, word, index, visited) {
  if (index >= word.length) return true;
  if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return false;

  const char = word.charAt(index);
  if (board[r][c] !== char) return false;
  if (visited[r][c]) return false;

  visited[r][c] = true;

  if (search(board, r + 1, c, word, index + 1, visited)) return true;
  if (search(board, r - 1, c, word, index + 1, visited)) return true;
  if (search(board, r, c + 1, word, index + 1, visited)) return true;
  if (search(board, r, c - 1, word, index + 1, visited)) return true;

  visited[r][c] = false;
  return false;
}

export default exists;
