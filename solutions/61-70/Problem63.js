// Problem 63
//
// This problem was asked by Microsoft.
//
// Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.
//
// For example, given the following matrix:
//
// [['F', 'A', 'C', 'I'],
//  ['O', 'B', 'Q', 'P'],
//  ['A', 'N', 'O', 'B'],
//  ['M', 'A', 'S', 'S']]
// and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.
//
// O(MN) Time complexity
// O(1) Space complexity
// M is number of rows in board and N is the number of columns in board

/**
 * Returns whether the word can be found in the matrix by going left to right or up to down
 * @param {char[][]} board
 * @param {string} word
 * @return {boolean}
 */
function wordSearch(board, word) {
  if (word.length > board.length && word.length > board[0].length) return false;

  let index = 0;

  // find left to right
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (index === word.length) return true;

      const letter = board[r][c];
      if (letter === word.charAt(index)) {
        index++;
      } else {
        // reset index, if the index does not match letter
        index = 0;
        if (letter === word.charAt(index)) {
          index = 1;
        }
      }
    }

    // reset index after we finish a row
    if (index === word.length) return true;
    index = 0;
  }

  index = 0;
  // find up to down
  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length; r++) {
      if (index === word.length) return true;

      const letter = board[r][c];
      if (letter === word.charAt(index)) {
        index++;
      } else {
        // reset index, if the index does not match letter
        index = 0;
        if (letter === word.charAt(index)) {
          index = 1;
        }
      }
    }

    // reset index after we finish a column
    if (index === word.length) return true;
    index = 0;
  }

  return false;
}

export default wordSearch;
