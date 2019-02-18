// Problem 53
//
// This problem was asked by Apple.
//
// Implement a queue using two stacks.
// Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods:
// enqueue, which inserts an element into the queue, and dequeue, which removes it.
//
// https://leetcode.com/problems/implement-queue-using-stacks/description/
//
// Enqueue: O(1) Time complexity
// Dequeue: Amortized O(1) Time complexity

class Queue {
  /**
   * Initialize an empty queue, with two stacks. FIFO(first-in, first-out)
   * Enqueue all items on stack1, stack2 gets used in dequeue
   */
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  /**
   * Inserts an element into the queue
   * @param {*} value
   */
  enqueue(value) {
    this.stack1.push(value);
  }

  /**
   * Removes an element from the the queue
   * @return {*}
   */
  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0) throw new Error();
    // If stack2 is empty, put everything from stack1 onto stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        const num = this.stack1.pop();
        this.stack2.push(num);
      }
    }

    return this.stack2.pop();
  }
}

export default Queue;
