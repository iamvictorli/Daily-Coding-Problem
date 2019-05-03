// Problem 104
//
// This problem was asked by Google.
//
// Determine whether a doubly linked list is a palindrome. What if it’s singly linked?
//
// For example, 1 -> 4 -> 3 -> 4 -> 1 returns true while 1 -> 4 returns false.
//
// https://leetcode.com/problems/palindrome-linked-list/
//
// O(N) Time complexity
// O(1) Space complexity
//
// With a doubly linked list,
// have a start pointer at the head and end pointer at the last node
// while start !== end || start.next !== end.prev, compare both values. if both values are not equal return false. then move start to start.next and move end to end.prev
// return true

/**
 * Determines whether a linked list is a palindrome. Solution works for doubly linked list.
 * @param {LinkedListNode} head
 * @return {boolean}
 */
function isPalindromeLinkedList(head) {
  let curr = head;
  let runner = head;

  while (runner !== null && runner.next !== null) {
    curr = curr.next;
    runner = runner.next.next;
  }

  if (runner !== null) curr = curr.next;

  curr = reverseLinkedList(curr);
  runner = head;

  while (curr !== null) {
    if (curr.val !== runner.val) return false;
    curr = curr.next;
    runner = runner.next;
  }
  return true;
}

/**
 * Reverses the linked list
 * @param {LinkedListNode} head
 * @return {LinkedListNode}
 */
function reverseLinkedList(head) {
  let newHead = null;
  while (head !== null) {
    const { next } = head;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}

export default isPalindromeLinkedList;
