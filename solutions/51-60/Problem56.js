// Problem 56
//
// This problem was asked by Google.
//
// Given an undirected graph represented as an adjacency matrix and an integer k,
// write a function to determine whether each vertex in the graph can be colored
// such that no two adjacent vertices share the same color using at most k colors.
//
// O(V^K) Time complexity
// O(V) Space complexity
// V is the number of vertices in the graph and K is the number of colors

/**
 * Determines whether each vertex in the graph can be colored, such that no two adjacent vertices share the same color using at most k colors.
 * @param {number[][]} graph
 * @param {number} k
 * @return {boolean}
 */
function kColors(graph, k) {
  const colors = Array.from(graph.length).fill(-1); // -1 for uncolored
  return kColorsHelper(graph, k, colors, 0);
}

/**
 * Recursive backtracking helper function. Goes through each vertexNum
 * @param {number[][]} graph
 * @param {number} k
 * @param {number[]} colors
 * @param {number} vertexNum
 * @return {boolean}
 */
function kColorsHelper(graph, k, colors, vertexNum) {
  if (vertexNum === graph.length) return true;

  // go through all the colors for vertexNum
  for (let i = 1; i <= k; i++) {
    if (isValid(graph, colors, vertexNum, i)) {
      // choose
      colors[vertexNum] = i;

      // explore
      if (kColorsHelper(graph, k, colors, vertexNum + 1)) return true;

      // unchoose
      colors[vertexNum] = -1;
    }
  }

  return false;
}

/**
 * Determines if the color can be used for vertexNum
 * @param {number[][]} graph
 * @param {number[]} colors
 * @param {number} vertexNum
 * @param {number} color
 * @return {boolean}
 */
function isValid(graph, colors, vertexNum, color) {
  for (let c = 0; c < graph[vertexNum].length; c++) {
    const neighbor = graph[vertexNum][c];
    // check for valid edge and if the neighbor has the same color
    if (neighbor === 1 && colors[c] === color) return false;
  }
  return true;
}

export default kColors;
