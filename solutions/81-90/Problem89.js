/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^validateBST" }] */

// Problem 89
//
// This problem was asked by LinkedIn.
//
// Determine whether a tree is a valid binary search tree.
//
// A binary search tree is a tree with two children, left and right, and satisfies the constraint that the key in the left child must be less than or equal to the root and the key in the right child must be greater than or equal to the root.
//
// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Validates Binary Search Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
function validateBST(root) {
  return validateBSTR(root);
  // return validateBSTIter(root);
}

function validateBSTR(root) {
  if (root === null) return true;
  return (
    validateBSTHelper(root.left, Number.MIN_SAFE_INTEGER, root.val) &&
    validateBSTHelper(root.right, root.val, Number.MAX_SAFE_INTEGER)
  );
}

function validateBSTHelper(root, min, max) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    validateBSTHelper(root.left, min, root.val) &&
    validateBSTHelper(root.right, root.val, max)
  );
}

/**
 * Validates Binary Search Tree Iterative approach
 * @param {TreeNode} root
 * @return {boolean}
 */
function validateBSTIter(root) {
  if (root === null) return true;
  const stack = [];
  let prev = null;
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    const node = stack.pop();
    if (prev !== null && prev >= node.val) return false;

    prev = node.val;
    if (node.right !== null) root = node.right;
  }

  return true;
}

export default validateBST;
