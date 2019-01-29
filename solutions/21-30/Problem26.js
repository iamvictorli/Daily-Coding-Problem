// Problem 26
//
// This problem was asked by Google.
//
// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.
//
// The list is very long, so making more than one pass is prohibitively expensive.
//
// Do this in constant space and in one pass.
//
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
//
// O(N) Time Complexity
// O(1) Space Complexity
// N is the length of the linked list

// eslint-disable-next-line
class LinkedListNode {
  /**
   * Initializes the start of a link list
   * @param {*} val The value stored in linked list
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Removes the kth last element from this list
 * @param {LinkedListNode} head
 * @param {number} k
 * @return {LinkedListNode}
 */
function findKthLast(head, k) {
  let curr = head;
  let runner = head; // k is guarenteed to be smaller, so we can just move runner
  let count = 0;
  // safety check
  while (count < k && runner !== null) {
    runner = runner.next;
    count++;
  }

  let prev = null;
  // move both curr and runner
  while (runner !== null) {
    runner = runner.next;
    prev = curr;
    curr = curr.next;
  }
  if (prev === null) return head.next;
  prev.next = prev.next.next;
  return head;
}

export default findKthLast;
