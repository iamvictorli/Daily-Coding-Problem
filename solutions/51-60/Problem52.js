// Problem 52
//
// This problem was asked by Google.
//
// Implement an LRU (Least Recently Used) cache.
// It should be able to be initialized with a cache size n, and contain the following methods:
//
// set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
// get(key): gets the value at key. If no such key exists, return null.
//
// Each operation should run in O(1) time.
//
// https://leetcode.com/problems/lru-cache/description/
//
// Both operations take O(1) Time complexity and O(N) Space complexity
// N is the number of key value pairs

class Node {
  /**
   * Initializes the doubly linked node with a key and value
   * @param {*} key The key stored in node
   * @param {*} value The value stored in value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
   * Initializes LRUCache with capacity size
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;

    // map maps key to a node
    this.map = new Map();

    // nodes after the head are most recently used
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * Sets key to value in cache.
   * If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      // add to most recently used
      this.removeNode(node);
      this.addNode(node);
    } else {
      const newNode = new Node(key, value);
      this.map.set(key, newNode);
      this.addNode(newNode);

      // over capacity, so remove the least recently used which is previous of tail
      if (this.map.size > this.capacity) {
        const lastItemNode = this.tail.prev;
        this.removeNode(lastItemNode);
        this.map.delete(lastItemNode.key);
      }
    }
  }

  /**
   * Gets the value at key in cache. If no such key exists, return null.
   * @param {*} key
   * @return {*}
   */
  get(key) {
    if (!this.map.has(key)) return null;

    // move key value node to most recently used
    const node = this.map.get(key);
    this.removeNode(node);
    this.addNode(node);

    return node.value;
  }

  /**
   * Inserts node after the head. Makes the node the most recently used
   * @param {Node} node
   */
  addNode(node) {
    // insertions after the head
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  /**
   * Removes the given node from the cache
   * @param {Node} node
   */
  // eslint-disable-next-line class-methods-use-this
  removeNode(node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
  }
}

export default LRUCache;
