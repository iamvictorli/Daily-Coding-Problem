// Problem 100
//
// This problem was asked by Google.
//
// You are in an infinite 2D grid where you can move in any of the 8 directions:
//
//  (x,y) to
//     (x+1, y),
//     (x - 1, y),
//     (x, y+1),
//     (x, y-1),
//     (x-1, y-1),
//     (x+1,y+1),
//     (x-1,y+1),
//     (x+1,y-1)
// You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.
//
// Example:
//
// Input: [(0, 0), (1, 1), (1, 2)]
// Output: 2
//
// It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

/**
 * Returns the minimum number of steps to reach a given sequence of points
 * @param {number[][]} points
 * @return {number}
 */
function minSteps(points) {
  if (points.length === 0 || points.length === 1) return 0;

  let totalSteps = 0;
  for (let i = 0; i < points.length - 1; i++) {
    totalSteps += steps(points[i], points[i + 1]);
  }

  return totalSteps;
}

/**
 * Return minimum number of steps between the first point to the second point
 * @param {number[][]} point1
 * @param {number[][]} point2
 * @return {number}
 */
function steps(point1, point2) {
  const [point1X, point1Y] = point1;
  const [point2X, point2Y] = point2;

  const horizontalSteps = Math.abs(point1X - point2X);
  const verticalSteps = Math.abs(point1Y - point2Y);

  return Math.max(horizontalSteps, verticalSteps);
}

export default minSteps;
