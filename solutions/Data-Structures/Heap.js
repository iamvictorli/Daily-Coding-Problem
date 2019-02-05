/**
 * Gets the left child index
 * @param {number} parentIndex
 * @return {number}
 */
function getLeftChildIndex(parentIndex) {
  return 2 * parentIndex + 1;
}

/**
 * Gets the right child index
 * @param {number} parentIndex
 * @return {number}
 */
function getRightChildIndex(parentIndex) {
  return 2 * parentIndex + 2;
}

/**
 * Gets the parent index
 * @param {number} childIndex
 * @return {number}
 */
function getParentIndex(childIndex) {
  return Math.floor((childIndex - 1) / 2);
}

class Heap {
  // Arrays in JS are dyanamic. No need to keep a capacity

  /**
   * Initializes a heap, based on comparator function
   * If no comparator function is supplied, initializes a minHeap
   * change to return x - y, for max heap
   * @param {function} comparator
   */
  // By default, this is a min heap
  //
  constructor(
    comparator = function comparatorFunction(x, y) {
      return y - x;
    }
  ) {
    this.items = [];
    this.comparator = comparator;
  }

  /**
   * Determines if there is a left child of index
   * @param {number} index
   * @return {boolean}
   */
  hasLeftChild(index) {
    return getLeftChildIndex(index) < this.items.length;
  }

  /**
   * Determines if there is a right child of index
   * @param {number} index
   * @return {boolean}
   */
  hasRightChild(index) {
    return getRightChildIndex(index) < this.items.length;
  }

  /**
   * Determines if there is a parent of index
   * @param {number} index
   * @return {boolean}
   */
  // eslint-disable-next-line
  hasParent(index) {
    return getParentIndex(index) >= 0;
  }

  /**
   * Gets the left child of index
   * @param {number} index
   * @return {number}
   */
  leftChild(index) {
    return this.items[getLeftChildIndex(index)];
  }

  /**
   * Gets the right child of index
   * @param {number} index
   * @return {number}
   */
  rightChild(index) {
    return this.items[getRightChildIndex(index)];
  }

  /**
   * Gets the parent of index
   * @param {number} index
   * @return {number}
   */
  parent(index) {
    return this.items[getParentIndex(index)];
  }

  /**
   * Returns the smallest in minHeap or largest in maxHeap
   * @return {number}
   */
  peek() {
    if (this.items.length === 0) throw new Error('No more items in heap');
    return this.items[0];
  }

  /**
   * Adds a number to heap
   * @param {number} item
   */
  add(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  /**
   * Extract min in minHeap and Extract max in maxHeap
   * @return {number}
   */
  poll() {
    if (this.items.length === 0) throw new Error('No more items in heap');
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();

    this.heapifyDown(0);
    return item;
  }

  /**
   * Heapify Up operation
   */
  heapifyUp() {
    let index = this.items.length - 1;
    while (
      this.hasParent(index) &&
      this.comparator(this.parent(index), this.items[index]) <= 0
    ) {
      this.swap(getParentIndex(index), index);
      index = getParentIndex(index);
    }
  }

  /**
   * Heapify Down operation
   * @param {number} index
   */
  heapifyDown(index) {
    while (this.hasLeftChild(index)) {
      let smallChildIndex = getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.comparator(this.leftChild(index), this.rightChild(index)) <= 0
      ) {
        smallChildIndex = getRightChildIndex(index);
      }

      if (this.comparator(this.items[index], this.items[smallChildIndex]) <= 0)
        this.swap(index, smallChildIndex);
      else break;
      index = smallChildIndex;
    }
  }

  /**
   * Swaps two positions in an array
   * @param {number} idx1
   * @param {number} idx2
   */
  swap(idx1, idx2) {
    const temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
  }

  /**
   * Returns the size of the heap
   * @return {number}
   */
  size() {
    return this.items.length;
  }
}

export default Heap;
