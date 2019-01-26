// Problem 23
//
// This problem was asked by Google.
//
// You are given an M by N matrix consisting of booleans that represents a board.
// Each True boolean represents a wall. Each False boolean represents a tile you can walk on.
//
// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start.
// If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.
//
// For example, given the following board:
//
// [[0, 0, 0, 0],
// [1, 1, 0, 1],
// [0, 0, 0, 0],
// [0, 0, 0, 0]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left)
// the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
// O(MN) Time and Space Complexity
// M is the number of rows and N is the number of columns

// perform bfs with matrix

/**
 * Returns the minimum number of steps required to reach the end coordinate from the start
 * If there is no path, return -1. Assume both start and end are not walls
 * Matrix is filled with 0 and 1s. 0 stands for false and 1 stands for true
 * coords represented by [x, y]
 * 0 represents a tile you can walk on, 1 stands for a wall
 * @param {number[][]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @return {number}
 */
function findMinPath(matrix, start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return 0;

  // the queue will have coordinates and their distance away from start
  const queue = [];
  // put surround cells from start, and their distance
  // when we visit each cell, we mark it as visited by replacing its value in matrix
  const [startX, startY] = start;
  queue.push([startX + 1, startY, 1]);
  queue.push([startX - 1, startY, 1]);
  queue.push([startX, startY - 1, 1]);
  queue.push([startX, startY + 1, 1]);

  // we can also use a visited set, marking is the same as using a visited set
  matrix[startX][startY] = 1;

  const [endX, endY] = end;
  while (queue.length !== 0) {
    const coordAndDistance = queue.shift();

    const [x, y, distance] = coordAndDistance;
    if (endX === x && endY === y) return distance;

    // check out of bounds
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length) continue;
    if (matrix[x][y] === 1) continue; // wall

    matrix[x][y] = 1; // mark wall

    queue.push([x - 1, y, distance + 1]);
    queue.push([x + 1, y, distance + 1]);
    queue.push([x, y - 1, distance + 1]);
    queue.push([x, y + 1, distance + 1]);
  }
  return -1;
}

export default findMinPath;
