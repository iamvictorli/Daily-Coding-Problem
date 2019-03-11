// Problem 76
//
// This problem was asked by Google.
//
// You are given an N by M 2D matrix of lowercase letters.
// Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically.
// That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.
//
// For example, given the following table:
// cba
// daf
// ghi
//
// This is not ordered because of the a in the center. We can remove the second column to make it ordered:
// ca
// df
// gi
// So your function should return 1, since we only needed to remove 1 column.
//
// As another example, given the following table:
// abcdef
// Your function should return 0, since the rows are already ordered (there's only one row).
//
// As another example, given the following table:
// zyx
// wvu
// tsr
// Your function should return 3, since we would need to remove all the columns to order it.
//
// O(NM) Time complexity
// O(1) Space complexity

/**
 * Returns the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically
 * @param {char[][]} matrix
 */
function colRemoved(matrix) {
  if (matrix.length === 0 || matrix.length === 1) return 0;
  let count = 0;
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length - 1; r++) {
      const char = matrix[r][c];
      const nextChar = matrix[r + 1][c];
      if (char.localeCompare(nextChar) > 0) {
        count++;
        break;
      }
    }
  }
  return count;
}

export default colRemoved;
