// Problem 108
//
// This problem was asked by Google.
//
// Given two strings A and B, return whether or not A can be shifted some number of times to get B.
//
// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.
//
// https://leetcode.com/problems/rotate-string/
//
// O(M + N) Time complexity for indexOf function
// O(N) Space complexity due to string concatenation
// M is the length of A and N is the length of B

/**
 * Returns whether or not A can be shifted some number of times to get B
 */
function isShiftedString(A, B) {
  if (A.length !== B.length) return false;
  return (A + A).indexOf(B) !== -1;
}

export default isShiftedString;
