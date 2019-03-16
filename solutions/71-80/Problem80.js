// Problem 80
//
// This problem was asked by Google.
//
// Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.
//
//     a
//    / \
//   b   c
//  /
// d
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in the tree

/**
 * Returns the deepest node
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function deepestNode(root) {
  // can do any type of tree traversal. Just keep count of the level.
  // At each node, if the node's level is greater than the current level, update the return node and update the level

  if (root === null) return null;
  // Level order traversal
  const queue = [];
  queue.push(root);
  let prev = null;
  while (queue.length !== 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      prev = node;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return prev;
}

export default deepestNode;
