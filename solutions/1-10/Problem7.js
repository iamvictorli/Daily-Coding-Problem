/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^numDecodings" }] */

// Problem 7
//
// This problem was asked by Facebook.
//
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
//
// You can assume that the messages are decodable. For example, '001' is not allowed.
//
// https://leetcode.com/problems/decode-ways/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the length of the message

/**
 * Returns the number of ways the message can be decoded.
 * Each solution builds on the previous
 * @param {string} message
 * @return {number}
 */
function numDecodings(message) {
  // return numDecodingsR(message);
  // return numDecodingsRMemo(message);
  // return numDecodingsDP(message);
  return numDecodingsC(message);
}

/**
 * Top Down Recursive Solution O(2^N) Time and Space Complexity
 * @param {string} message
 * @return {number}
 */
function numDecodingsR(message) {
  return message.length === 0 ? 0 : numDecodingsRHelper(message, 0);
}

/**
 * Top Down Recursive Helper function O(2^N) Time and Space Complexity
 * @param {string} message
 * @param {number} index
 * @return {number}
 */
function numDecodingsRHelper(message, index) {
  if (index === message.length) return 1;
  if (message.charAt(index) === '0') return 0;

  // Single Number
  let totalDecodings = numDecodingsRHelper(message, index + 1);
  if (index < message.length - 1) {
    // Double Number
    const doubleNum = parseInt(message.substring(index, index + 2), 10);

    if (doubleNum >= 10 && doubleNum <= 26)
      totalDecodings += numDecodingsRHelper(message, index + 2);
  }
  return totalDecodings;
}

/**
 * Top Down Recursive Solution with Memoization O(N) Time and Space Complexity
 * @param {string} message
 * @return {number}
 */
function numDecodingsRMemo(message) {
  return message.length === 0
    ? 0
    : numDecodingsRMemoHelper(message, 0, new Map());
}

/**
 * Top Down Recursive Helper function with Memoization O(N) Time and Space Complexity
 * @param {string} message
 * @param {number} index
 * @param {Map<number, number>} memo
 * @return {number}
 */
function numDecodingsRMemoHelper(message, index, memo) {
  if (index === message.length) return 1;
  if (memo.has(index)) return memo.get(index);
  if (message.charAt(index) === '0') return 0;

  // Single Number
  let totalDecodings = numDecodingsRMemoHelper(message, index + 1, memo);
  if (index < message.length - 1) {
    // Double Number
    const doubleNum = parseInt(message.substring(index, index + 2), 10);

    if (doubleNum >= 10 && doubleNum <= 26)
      totalDecodings += numDecodingsRHelper(message, index + 2);
  }

  memo.set(index, totalDecodings);
  return totalDecodings;
}

/**
 * Bottom Up Solution using a dp table. O(N) Time and Space Complexity
 * @param {string} message
 * @return {number}
 */
function numDecodingsDP(message) {
  if (message.length === 0) return 0;
  if (message.length === 1) return message !== '0' ? 1 : 0;

  const dpTable = Array(message.length + 1).fill(0); // fill Array of message length + 1 with 0s.
  dpTable[0] = message.charAt(0) !== '0' ? 1 : 0;
  dpTable[1] = message.charAt(0) !== '0' ? 1 : 0;

  for (let i = 2; i <= message.length; i++) {
    const singleNum = parseInt(message.substring(i - 1, i), 10);
    const doubleNum = parseInt(message.substring(i - 2, i), 10);

    if (singleNum >= 1 && singleNum <= 9) dpTable[i] += dpTable[i - 1];
    if (doubleNum >= 10 && doubleNum <= 26) dpTable[i] += dpTable[i - 2];
  }
  return dpTable[dpTable.length - 1];
}

/**
 * Bottom Up Solution Constant Space O(N) Time and O(1) Space Complexity
 * @param {string} message
 * @return {number}
 */
function numDecodingsC(message) {
  if (message.length === 0) return 0;
  if (message.length === 1) return message !== '0' ? 1 : 0;

  let prev = message.charAt(0) !== '0' ? 1 : 0;
  let curr = message.charAt(0) !== '0' ? 1 : 0;

  for (let i = 2; i <= message.length; i++) {
    const singleNum = parseInt(message.substring(i - 1, i), 10);
    const doubleNum = parseInt(message.substring(i - 2, i), 10);

    let total = 0;
    if (singleNum >= 1 && singleNum <= 9) total += curr;
    if (doubleNum >= 10 && doubleNum <= 26) total += prev;
    prev = curr;
    curr = total;
  }
  return curr;
}

export default numDecodings;
