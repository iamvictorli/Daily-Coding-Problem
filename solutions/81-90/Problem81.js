// Problem 81
//
// This problem was asked by Yelp.
//
// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent.
// You can assume each valid number in the mapping is a single digit.
//
// For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
//
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
//
// O(3^N * 4^M) Time complexity
// O(3^N * 4^M) Space complexity
// N is the number of digits that maps to 3 letters and M is the number of digits that maps to 4 letters

/**
 * Returns all possible letters the number number represents
 * @param {Map<number, string[]>} letterMapping
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(letterMapping, digits) {
  if (digits.length === 0) return [];
  const list = [];
  backtrack(letterMapping, digits, list, 0, '');
  return list;
}

/**
 * Recursive backtracking function
 * @param {Map<number, string[]>} letterMapping
 * @param {string} digits
 * @param {string[]} list
 * @param {number} index
 * @param {string} buildString
 */
function backtrack(letterMapping, digits, list, index, buildString) {
  if (index === digits.length) {
    list.push(buildString);
    return;
  }

  const digit = digits.charAt(index);
  const letters = letterMapping.get(digit);

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    backtrack(letterMapping, digits, list, index + 1, buildString + letter);
  }
}

export default letterCombinations;
