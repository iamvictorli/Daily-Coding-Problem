/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^countUnivalSubtrees" }] */

// Problem 8
//
// This problem was asked by Google.
//
// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
//
// Given the root to a binary tree, count the number of unival subtrees.
//
// For example, the following tree has 5 unival subtrees:
//
//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1
//
// https://www.dailycodingproblem.com/blog/unival-trees/
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in the tree

/**
 * Returns the count of unival subtrees
 * @param {TreeNode} root
 * @return {number}
 */
function countUnivalSubtrees(root) {
  // return countUnivalSubtreesS(root);
  return countUnivalSubtreesF(root);
}

/**
 * Slower version of counting unival subtrees O(N^2) Time complexity and O(N) Space Complexity
 * @param {TreeNode} root
 * @return {number}
 */
function countUnivalSubtreesS(root) {
  if (root === null) return 0;
  const leftCount = countUnivalSubtrees(root.left);
  const rightCount = countUnivalSubtrees(root.right);

  if (isUnival(root)) return 1 + leftCount + rightCount;
  return leftCount + rightCount;
}

/**
 * Checks if a node is unival
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnival(root) {
  return univalHelper(root, root.val);
}

/**
 * Checks if tree and recusively checks subtrees equals val
 * @param {TreeNode} root
 * @param {number} val
 * @return {boolean}
 */
function univalHelper(root, val) {
  if (root === null) return true;
  if (root.val !== val) return false;

  return univalHelper(root.left, val) && univalHelper(root.right, val);
}

/**
 * Faster version of counting unival subtrees O(N) Time complexity and O(N) Space Complexity
 * Sort of a combination of two recursive function in the slower version
 * res[0] holds the result
 * @param {TreeNode} root
 * @return {number}
 */
function countUnivalSubtreesF(root) {
  const res = [0];
  countUnivalSubtreesFHelper(root, res);
  return res[0];
}

/**
 * @param {TreeNode} root
 * @param {number[]} res
 * @return {boolean}
 */
function countUnivalSubtreesFHelper(root, res) {
  if (root === null) return true;

  const isLeftUnival = countUnivalSubtreesFHelper(root.left, res);
  const isRightUnival = countUnivalSubtreesFHelper(root.right, res);

  if (isLeftUnival && isRightUnival) {
    if (root.left !== null && root.val !== root.left.val) return false;
    if (root.right !== null && root.val !== root.right.val) return false;

    res[0]++;
    return true;
  }
  return false;
}

export default countUnivalSubtrees;
