class TreeNode {
  /**
   * Initialize a binary tree node with a value and/or left and right nodes
   * @param {*} val The value stored in the binary tree node.
   * @param {TreeNode?} left
   * @param {TreeNode?} right
   */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export default TreeNode;
