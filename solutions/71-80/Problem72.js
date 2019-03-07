// Problem 72
//
// This problem was asked by Google.
//
// In a directed graph, each node is assigned an uppercase letter.
// We define a path's value as the number of most frequently-occurring letter along that path.
// For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.
//
// Given a graph with n nodes and m directed edges, return the largest value path of the graph.
// If the largest value is infinite, then return null.
//
// The graph is represented with a string and an edge list. The i-th character represents the uppercase letter of the i-th node.
// Each tuple in the edge list (i, j) means there is a directed edge from the i-th node to the j-th node.
// Self-edges are possible, as well as multi-edges.
//
// For example, the following input graph:
//
// ABACA
// [(0, 1),
//  (0, 2),
//  (2, 3),
//  (3, 4)]
// Would have maximum value 3 using the path of vertices [0, 2, 3, 4], (A, A, C, A).
//
// The following input graph:
//
// A
// [(0, 0)]
// Should return null, since we have an infinite loop.
//
// O(V + E) Time complexity
// O(V + E) Space complexity
// V is the length of the word and E is the number of edges

/**
 * Returns the largest value path of the graph
 * @param {string} word
 * @param {number[][]} edgeList
 * @return {number}
 */
function largestPathValue(word, edgeList) {
  // make adjacency list and incoming edge list

  const adjList = new Map();
  const incomingEdgeList = new Map();
  const incomingEdgeListCopy = new Map(); // For after topological sort
  for (let i = 0; i < word.length; i++) {
    adjList.set(i, new Set());
    incomingEdgeList.set(i, new Set());
    incomingEdgeListCopy.set(i, new Set());
  }

  for (let i = 0; i < edgeList.length; i++) {
    const [start, end] = edgeList[i];

    const neighbors = adjList.get(start);
    neighbors.add(end);

    const incomingEdges = incomingEdgeList.get(end);
    incomingEdges.add(start);

    const incomingEdgesCopy = incomingEdgeListCopy.get(end);
    incomingEdgesCopy.add(start);
  }

  // Do Topological Sort
  const topOrder = topologicalSort(adjList, incomingEdgeList);

  // if there are still edges left, then there must be a cycle
  if (edgesLeft(incomingEdgeList)) return null;

  // find longest path in a directed acyclic graph from topological ordering
  const nodeToPrevMap = new Map();
  for (let i = 0; i < topOrder.length; i++) {
    const node = topOrder[i];

    const incomingEdgesFromNode = incomingEdgeListCopy.get(node);
    if (incomingEdgesFromNode.size === 0)
      nodeToPrevMap.set(node, {
        length: 0,
        prev: null
      });
    else {
      // get longest length of incoming edges from node
      const edges = Array.from(incomingEdgesFromNode.values());
      let maxEdge = edges[0];
      let { length: maxLength } = nodeToPrevMap.get(maxEdge);
      for (let e = 1; e < edges.length; e++) {
        const incomingEdge = edges[e];
        const { length } = nodeToPrevMap.get(incomingEdge);

        if (length > maxLength) {
          maxEdge = incomingEdge;
          maxLength = length;
        }
      }

      nodeToPrevMap.set(node, {
        length: maxLength + 1,
        prev: maxEdge
      });
    }
  }

  // get longest length from nodeToPrevMap
  let maxDistNode = topOrder[0];
  let { length: maxLength } = nodeToPrevMap.get(maxDistNode);

  for (let i = 1; i < topOrder.length; i++) {
    const node = topOrder[i];
    const { length } = nodeToPrevMap.get(node);
    if (length > maxLength) {
      maxDistNode = node;
      maxLength = length;
    }
  }

  let max = 0;
  const freqCount = new Map();

  // traversing through the longest path
  while (maxDistNode !== null) {
    const char = word.charAt(maxDistNode);

    if (!freqCount.has(char)) freqCount.set(char, 0);

    const newCount = freqCount.get(char) + 1;
    freqCount.set(char, newCount);
    max = Math.max(newCount);

    // go to prev node
    maxDistNode = nodeToPrevMap.get(maxDistNode).prev;
  }

  return max;
}

/**
 * Returns a topological ordering of a graph
 * @param {Map<number, Set<number>>} adjList
 * @param {Map<number, Set<number>>} incomingEdgeList
 * @return {number[]}
 */
function topologicalSort(adjList, incomingEdgeList) {
  const topOrder = [];
  const nodesWithNoIncomingEdges = [];

  // initially, get all nodes with no incoming edges
  const nodes = Array.from(incomingEdgeList.keys());
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    // check for no incoming edges from this node
    if (incomingEdgeList.get(node).size === 0)
      nodesWithNoIncomingEdges.push(node);
  }

  while (nodesWithNoIncomingEdges.length !== 0) {
    const node = nodesWithNoIncomingEdges.shift();
    topOrder.push(node);

    const neighbors = Array.from(adjList.get(node));
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      const incomingEdgesFromNeighbor = incomingEdgeList.get(neighbor);
      incomingEdgesFromNeighbor.delete(node);

      if (incomingEdgesFromNeighbor.size === 0)
        nodesWithNoIncomingEdges.push(neighbor);
    }
  }
  return topOrder;
}

/**
 * Returns if there are any edges left in incoming edge list
 * @param {Map<number, Set<number>>} incomingEdgeList
 * @return {boolean}
 */
function edgesLeft(incomingEdgeList) {
  const incomingEdges = Array.from(incomingEdgeList.values());
  for (let i = 0; i < incomingEdges.length; i++) {
    const edge = incomingEdges[i];
    if (edge.size !== 0) return true;
  }
  return false;
}

export default largestPathValue;
