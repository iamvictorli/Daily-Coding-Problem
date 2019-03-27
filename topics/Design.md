# Design

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

## Problem 16

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

- record(order_id): adds the order_id to the log
- get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem16.js)

---

## Problem 24

This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

- is_locked, which returns whether the node is locked
- lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
- unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem24.js)

---

## Problem 33

This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

- 2
- 1.5
- 2
- 3.5
- 2
- 2
- 2

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem33.js)

---

## Problem 43

This problem was asked by Amazon.

Implement a stack that has the following methods:

- push(val), which pushes an element onto the stack
- pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
- max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

Each method should run in constant time.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem43.js)

---

## Problem 45

This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem45.js)

---

## Problem 52

This problem was asked by Google.

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

- set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
- get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem52.js)

---

## Problem 53

This problem was asked by Apple.

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem53.js)

---

## Problem 55

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

- shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
- restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem55.js)

---

## Problem 59

This problem was asked by Google.

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem59.js)

---

## Problem 66

This problem was asked by Square.

Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem66.js)

---

## Problem 67

This problem was asked by Google.

Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

- set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
- get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem67.js)

---

## Problem 71

This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem71.js)

---

## Problem 82

This problem was asked Microsoft.

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem82.js)

---

## Problem 91

This problem was asked by Dropbox.

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

```javascript
const functions = [];
for (var i = 0; i < 10; i++) {
  functions.push(() => i);
}

functions.forEach(f => console.log(f()));
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem91.js)

---