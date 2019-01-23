// Problem 20
//
// This problem was asked by Google.
//
// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
//
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
//
// In this example, assume nodes with the same value are the exact same node objects.
//
// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
//
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/
//
// O(M + N) Time Complexity
// O(1) Space Complexity
// M is the length of the first list and N is the length of the second list

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
 * Find the intersecting node from two non-cyclical linked lists
 * @param {LinkedListNode} list1
 * @param {LinkedListNode} list2
 * @return {LinkedListNode}
 */
function findIntersection(list1, list2) {
  if (list1 === null) return null;
  if (list2 === null) return null;

  let list1Copy = list1;
  let list2Copy = list2;
  // will either hit intersecting node, or when both are null
  while (list1Copy !== list2Copy) {
    list1Copy = list1Copy !== null ? list1Copy.next : list2;
    list2Copy = list2Copy !== null ? list2Copy.next : list1;
  }
  return list1Copy;
}

export default findIntersection;
