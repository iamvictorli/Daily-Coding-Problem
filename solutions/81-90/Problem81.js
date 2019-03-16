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

/**
 * Returns all possible letters the number number represents
 */
function letterCombinations(letterMapping, digits) {
  if (digits.length === 0) return [];
  const list = [];
  backtrack(letterMapping, digits, list, 0, '');
  return list;
}

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
