// Problem 24
//
// This problem was asked by Google.
//
// Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.
//
// Design a binary tree node class with the following methods:
//
// is_locked, which returns whether the node is locked
// lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
// unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
//
// You may augment the node to add parent pointers or any other property you would like.
// You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes.
// Each method should run in O(h), where h is the height of the tree.
//
// https://www.dailycodingproblem.com/blog/lockable-binary-trees/
//
// O(1) Time complexity for isLocked and O(h) Time complexity for lock and unlock
// O(1) Space compleixty for all of the three methods

class LockingTreeNode {
  /**
   * Initialize a binary tree node with a value and/or left and right nodes
   * @param {*} val The value stored in the binary tree node.
   */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;

    this.isLocked = false;
    this.parent = null;
    this.lockedDescendantCount = 0;
  }
}

/**
 * Checks to see if we can lock or unlock this node by checking ancestors and descendants
 * @param {LockingTreeNode} node
 * @return {boolean}
 */
function canLockOrUnlock(node) {
  if (node.lockedDescendantCount > 0) return false;

  let curr = node.parent;
  while (curr !== null) {
    if (curr.isLocked) return false;
    curr = curr.parent;
  }
  return true;
}

/**
 * Return whether the node is locked
 * @param {LockingTreeNode} node
 * @return {boolean}
 */
function isLocked(node) {
  return node.isLocked;
}

/**
 * Tries to lock the node. If it cannot be locked, then it should return false.
 * Otherwise, it should lock it and return true.
 * @param {LockingTreeNode} node
 * @return {boolean}
 */
function lock(node) {
  if (node === null) return false;
  if (!node.isLocked && canLockOrUnlock(node)) {
    // Not locked, so update isLocked and increment count in all ancestors
    node.isLocked = true;

    let curr = node.parent;
    while (curr !== null) {
      curr.lockedDescendantCount += 1;
      curr = curr.parent;
    }
    return true;
  }
  return false;
}

/**
 * Unlocks the node.
 * If it cannot be unlocked, then it should return false.
 * Otherwise, it should unlock it and return true.
 * @param {LockingTreeNode} node
 * @return {boolean}
 */
function unlock(node) {
  if (node === null) return false;

  if (node.isLocked && canLockOrUnlock(node)) {
    node.isLocked = false;

    // Update count in all ancestors
    let curr = node.parent;
    while (curr !== null) {
      curr.lockedDescendantCount -= 1;
      curr = curr.parent;
    }
    return true;
  }
  return false;
}
export { LockingTreeNode, isLocked, lock, unlock };
