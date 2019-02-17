// Problem 50
//
// This problem was asked by Microsoft.
//
// Suppose an arithmetic expression is given as a binary tree.
// Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.
//
// Given the root to such a tree, write a function to evaluate it.
//
// For example, given the following tree:
//
//     *
//    / \
//   +   +
//  / \ / \
// 3  2 4  5
// You should return 45, as it is (3 + 2) * (4 + 5).
//
// O(N) Time complexity
// O(H) Space complexity
// N is the number of nodes, and H is the height of the tree

import isNumber from 'is-number';

/**
 * Evaluates the expression tree, given root. Postorder traversal
 * @param {TreeNode} tree
 * @return {number}
 */
function evalExpressionTree(tree) {
  if (isNumber(tree.val)) return tree.val;

  const valLeft = evalExpressionTree(tree.left);
  const valRight = evalExpressionTree(tree.right);
  switch (tree.val) {
    case '+':
      return valLeft + valRight;
    case '-':
      return valLeft - valRight;
    case '*':
      return valLeft * valRight;
    default:
      return valLeft / valRight;
  }
}

export default evalExpressionTree;
