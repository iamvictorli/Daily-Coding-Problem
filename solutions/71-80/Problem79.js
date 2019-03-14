// Problem 79
//
// This problem was asked by Facebook.
//
// Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.
//
// For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.
//
// Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
//
// https://leetcode.com/problems/non-decreasing-array/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

function nonDecreasing(arr) {
  let count = 0;
  for (let i = 1; i < arr.length && count <= 1; i++) {
    if (arr[i - 1] > arr[i]) {
      count++;
      // have to decide to replace previous number with current number
      // or replace previous number with current number
      if (i - 2 < 0 || arr[i - 2] <= arr[i]) arr[i - 1] = arr[i];
      else arr[i] = arr[i - 1];
    }
  }
  return count <= 1;
}

export default nonDecreasing;
