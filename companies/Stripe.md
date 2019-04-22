# Stripe

## Problem 4

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem4.js)

---

## Problem 97

This problem was asked by Stripe.

Write a map implementation with a get function that lets you retrieve the value of a key at a particular time.

It should contain the following methods:

- set(key, value, time): sets key to value for t = time.
- get(key, time): gets the key at t = time.

The map should work like this. If we set a key at a particular time, it will maintain that value forever or until it gets set at a later time. In other words, when we get a key at a time, it should return the value that was set for that key set at the most recent time.

Consider the following examples:

- d.set(1, 1, 0) # set key 1 to value 1 at time 0
- d.set(1, 2, 2) # set key 1 to value 2 at time 2
- d.get(1, 1) # get key 1 at time 1 should be 1
- d.get(1, 3) # get key 1 at time 3 should be 2
- d.set(1, 1, 5) # set key 1 to value 1 at time 5
- d.get(1, 0) # get key 1 at time 0 should be null
- d.get(1, 10) # get key 1 at time 10 should be 1
- d.set(1, 1, 0) # set key 1 to value 1 at time 0
- d.set(1, 2, 0) # set key 1 to value 2 at time 0
- d.get(1, 0) # get key 1 at time 0 should be 2

---