/* eslint-disable */

// Problem 6
//
// This problem was asked by Google.
//
// An XOR linked list is a more memory efficient doubly linked list.
// Instead of each node holding next and prev fields, it holds a field named both,
// which is an XOR of the next node and the previous node.
//
// Implement an XOR linked list;
// it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
//
// If using a language that has no pointers (such as Javascript),
// you can assume you have access to getPointer and dereferencePointer functions
// that converts between nodes and memory addresses.
//
// WARNING: CODE DOES NOT RUN
//
// add(element): O(1) Time complexity and Space complexity
// get(index): O(N) Time complexity and O(1) Space complexity
// N is the number of nodes in the linked list

class ListNode {
  /**
   * Initialize List Node
   * @param {*} val
   */
  constructor(val) {
    this.val = val;
    this.both = null;
  }
}

// Assume null ^ value = value
// Assume null ^ null = null
// If the linkedlist has one node, that ListNode.both is null
class XORLinkedList {
  /**
   * Initialize XOR Linked List
   */
  constructor() {
    this.root = null;
    this.tail = null;
  }

  /**
   * Adds a value to the end of the linked list
   * @param {*} val
   */
  add(val) {
    const node = new ListNode(val);
    if (this.root === null && this.tail === null) {
      this.root = node;
      this.tail = node;
    } else {
      node.both = getPointer(this.tail); // set previous memory address for node
      this.tail.both ^= getPointer(node); // update tail both
      this.tail = node; // tail is the new node
    }
  }

  /**
   * Returns the node at index of this XOR Linked List
   * @param {number} index
   * @return {ListNode}
   */
  get(index) {
    if (index === 0) {
      return this.root;
    }
    // index is greater than 0, cannot traverse if root is null
    if (this.root === null) throw new Error('Cannot traverse if root is null');

    // curr and prev holds memory location
    let curr = getPointer(this.root);
    let prev = null;

    let i = 0;
    // Assume null ^ value = value
    //
    // Rules of XOR:
    // 1. X ^ X = 0
    // 2. X ^ 0 = X
    // 3. X ^ Y = Y ^ X
    // 4. (X ^ Y) ^ Z = X ^ (Y ^ Z)
    //
    // curr hits null when the previous memory location and the current memory location is the same
    // same value ^ same value = 0, or null in this case
    while (curr !== null) {
      if (i === index) break;

      // (curr ^ prev) ^ next = curr ^ (prev ^ next)
      // The XOR List node defined as prev ^ next = curr.
      // To traverse:
      // prev ^ curr = next.
      const next = prev ^ curr;
      prev = curr;
      curr = next;
      i++;
    }

    if (i !== index) throw new Error('Less nodes than index');

    return dereferencePointer(curr);
  }
}
