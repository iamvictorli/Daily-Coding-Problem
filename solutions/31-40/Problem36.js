// Problem 36
//
// This problem was asked by Dropbox.
//
// Given the root to a binary search tree, find the second largest node in the tree.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of nodes in binary search tree

// get predecessor of max
/**
 * Returns the second largest node in binary search tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function secondLargest(root) {
  if (root === null) return null;
  const max = getMax(root);
  return predecessor(root, max);
}

/**
 * Returns the largest node in binary search tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function getMax(root) {
  let curr = root;
  while (curr.right !== null) {
    curr = curr.right;
  }
  return curr;
}

/**
 * Returns the predecessor of node in binary search tree
 * @param {TreeNode} root
 * @param {TreeNode} node
 * @return {TreeNode}
 */
function predecessor(root, node) {
  if (node.left !== null) {
    let curr = node.left;
    while (curr.right !== null) {
      curr = curr.right;
    }
    return curr;
  }

  // get the last right traversing through root to find node
  // last right would be null, if we are trying to find the predecessor of min node
  let lastRight = null;
  let curr = root;
  while (curr.val !== node.val) {
    if (curr.val < node.val) {
      lastRight = curr;
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  return lastRight;
}

export default secondLargest;
