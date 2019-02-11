// Problem 43
//
// This problem was asked by Amazon.
//
// Implement a stack that has the following methods:
//
// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack.
// If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently.
// If there are no elements in the stack, then it should throw an error or return null.
// Each method should run in constant time.
//
// https://leetcode.com/problems/min-stack/description/
//
// O(1) Time complexity
// O(N) Space complexity
// N is the number of elements in the stack

class MaxStack {
  /**
   * Initializes a stack and maximum number stack. The maxNum stack represents the maximum number at each state
   */
  constructor() {
    this.stack = [];
    this.maxNum = [];
  }

  /**
   * Pushes an element onto the stack
   * @param {number} val
   */
  push(val) {
    if (
      this.maxNum.length === 0 ||
      val >= this.maxNum[this.maxNum.length - 1]
    ) {
      this.maxNum.push(val);
    }
    this.stack.push(val);
  }

  /**
   * Pops off an element, and return the topmost element of the stack
   * @return {number?}
   */
  pop() {
    if (this.stack.length === 0 && this.maxNum.length === 0) return null;
    const val = this.stack.pop();
    // check if we need to pop off the maxNum stack
    if (val === this.maxNum[this.maxNum.length - 1]) this.maxNum.pop();
    return val;
  }

  /**
   * Returns the maximum value in the stack currently
   * @return {number?}
   */
  max() {
    if (this.maxNum.length === 0) return null;
    return this.maxNum[this.maxNum.length - 1];
  }
}

export default MaxStack;
