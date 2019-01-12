/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^CountUnivalSubtrees" }] */

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

// eslint-disable-next-line
class TreeNode {
  /**
   * Initialize a binary tree node with a value and/or left and right nodes
   * @param {*} val The value stored in the binary tree node.
   */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Returns the count of unival subtrees
 * @param {TreeNode} root
 * @return {number}
 */
function CountUnivalSubtrees(root) {
  // return CountUnivalSubtreesS(root);
  return CountUnivalSubtreesF(root);
}

/**
 * Slower version of counting unival subtrees O(N^2) Time complexity and O(N) Space Complexity
 * @param {TreeNode} root
 * @return {number}
 */
function CountUnivalSubtreesS(root) {
  if (root === null) return 0;
  const leftCount = CountUnivalSubtrees(root.left);
  const rightCount = CountUnivalSubtrees(root.right);

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
function CountUnivalSubtreesF(root) {
  const res = [0];
  CountUnivalSubtreesFHelper(root, res);
  return res[0];
}

/**
 * @param {TreeNode} root
 * @param {number[]} res
 * @return {boolean}
 */
function CountUnivalSubtreesFHelper(root, res) {
  if (root === null) return true;

  const isLeftUnival = CountUnivalSubtreesFHelper(root.left, res);
  const isRightUnival = CountUnivalSubtreesFHelper(root.right, res);

  if (isLeftUnival && isRightUnival) {
    if (root.left !== null && root.val !== root.left.val) return false;
    if (root.right !== null && root.val !== root.right.val) return false;

    res[0]++;
    return true;
  }
  return false;
}

export default CountUnivalSubtrees;
