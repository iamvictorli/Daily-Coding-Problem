# Daily Coding Problem

Solutions to [Daily Coding Problem](https://www.dailycodingproblem.com) in Javascript.

## Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem1.js)

---

## Problem 2

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem2.js)

---

## Problem 3

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

The following test should pass:

```javascript
const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);
expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem3.js)

---

## Problem 4

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem4.js)

---

## Problem 5

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

```javascript
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}
```

Implement car and cdr.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem5.js)

---

## Problem 6

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Javascript), you can assume you have access to getPointer and dereferencePointer functions that converts between nodes and memory addresses.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem6.js)

---