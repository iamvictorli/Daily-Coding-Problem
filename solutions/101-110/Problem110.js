// Problem 110
//
// This problem was asked by Facebook.
//
// Given a binary tree, return all paths from the root to leaves.
//
// For example, given the tree
//
//    1
//   / \
//  2   3
//     / \
//    4   5
// it should return [[1, 2], [1, 3, 4], [1, 3, 5]].
//
// https://leetcode.com/problems/binary-tree-paths/
//
// O(N) Time complexity
// O(H) Space complexity
// N is the nodes in the tree and H is the height of the tree

/**
 * Returns all paths from the root to leaves in a binary tree
 * @param {TreeNode} root
 * @return {number[]}
 */
function binaryTreePaths(root) {
  const list = [];
  backtrack(root, list, []);
  return list;
}

/**
 * Backtracking function helper
 * @param {TreeNode} root
 * @param {number[][]} list
 * @param {number[]} listSoFar
 */
function backtrack(root, list, listSoFar) {
  if (root === null) return;

  // choose
  listSoFar.push(root.val);

  if (root.left === null && root.right === null) {
    list.push([...listSoFar]);
    listSoFar.pop();
    return;
  }

  // explore
  backtrack(root.left, list, listSoFar);
  backtrack(root.right, list, listSoFar);

  // unchoose
  listSoFar.pop();
}

export default binaryTreePaths;
