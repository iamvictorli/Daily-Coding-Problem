// Problem 3
//
// This problem was asked by Google
//
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
// and deserialize(s), which deserializes the string back into the tree.
//
// For example, given the following Node class
//
// class TreeNode {
// constructor(val, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }
// }
//
// const node = new TreeNode(
//   'root',
//   new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
// );
// expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
//
// https://leetcode.com/problems/serialize-and-deserialize-bst/description/
//
// Both serialize and deserialize functions:
// O(N) Time Complexity
// O(N) Space Complexity
// N is the number of nodes in the tree

import TreeNode from '../Data-Structures/TreeNode';

// Serialize using level order traversal

/**
 * Returns the serialized string of a tree
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  let serializedString = '';
  if (root === null) return serializedString;

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();

    if (node === null) {
      serializedString += '* '; // indicates null
    } else {
      serializedString += `${node.val} `;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return serializedString;
}

/**
 * Builds a tree out of a serialized string of a tree
 * @param {string} serializedString
 * @return {TreeNode}
 */
function deserialize(serializedString) {
  if (serializedString.length === 0) return null;
  const values = serializedString.split(' ');

  values.pop(); // the last value of values will have an empty string due to split

  const root = new TreeNode(values[0]);
  const queue = [];
  queue.push(root);

  for (let i = 1; i < values.length; i++) {
    const parentNode = queue.shift();

    if (values[i] !== '*') {
      const leftChild = new TreeNode(values[i]);
      parentNode.left = leftChild;
      queue.push(leftChild);
    }

    i++;

    if (values[i] !== '*') {
      const rightChild = new TreeNode(values[i]);
      parentNode.right = rightChild;
      queue.push(rightChild);
    }
  }

  return root;
}

export { serialize, deserialize };
