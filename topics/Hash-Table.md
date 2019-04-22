# Hash Table

## Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem1.js)

---

## Problem 13

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem13.js)

---

## Problem 17

This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

```
dir
    subdir1
    subdir2
        file.ext
```

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.


[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem17.js)

---

## Problem 55

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

- shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
- restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem55.js)

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