# Easy

## Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem1.js)

---

## Problem 8

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

```
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem8.js)

---

## Problem 16

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

- record(order_id): adds the order_id to the log
- get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem16.js)

---

## Problem 20

This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem20.js)

---

## Problem 21

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem21.js)

---

## Problem 23

This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

```
[[0, 0, 0, 0],
[1, 1, 0, 1],
[0, 0, 0, 0],
[0, 0, 0, 0]]
```
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem23.js)

---

## Problem 27

This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string `"([])[]({})"`, you should return true.

Given the string `"([)]"` or `"((()"`, you should return false.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem27.js)

---

## Problem 29

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character.

For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem29.js)

---