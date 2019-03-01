// Problem 65
//
// This problem was asked by Amazon.
//
// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
//
// For example, given the following matrix:
//
// [[1,  2,  3,  4,  5],
//  [6,  7,  8,  9,  10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20]]
// You should print out the following:
//
// 1
// 2
// 3
// 4
// 5
// 10
// 15
// 20
// 19
// 18
// 17
// 16
// 11
// 6
// 7
// 8
// 9
// 14
// 13
// 12
//
// https://leetcode.com/problems/spiral-matrix/description/

/**
 * Returns the elements in the matrix in spiral order
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  let LC = 0; // index of left most column
  let RC = matrix[0].length - 1; // index of right most column

  let TR = 0; // index of top row
  let BR = matrix.length - 1; // index of bottom row

  // can print out the values instead of pushing to arr
  const arr = [];
  while (LC <= RC || TR <= BR) {
    // from left column to right column
    for (let c = LC; c <= RC; c++) {
      arr.push(matrix[TR][c]);
    }
    // finish with top row, so increment
    TR++;

    if (LC > RC || TR > BR) break; // sanity check
    // from top row to bottom row
    for (let r = TR; r <= BR; r++) {
      arr.push(matrix[r][RC]);
    }
    // finish with right column, so decrement
    RC--;

    if (LC > RC || TR > BR) break;
    // from right column to left column
    for (let c = RC; c >= LC; c--) {
      arr.push(matrix[BR][c]);
    }
    // finish with bottom row, so decrement
    BR--;

    if (LC > RC || TR > BR) break;
    // from bottom row to top row
    for (let r = BR; r >= TR; r--) {
      arr.push(matrix[r][LC]);
    }
    // finish with left column, so increment
    LC++;
  }
  return arr;
}

export default spiralOrder;
