/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^buildPalindromeByFewestInsertions" }] */
// Problem 34
//
// This problem was asked by Quora.
//
// Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word.
// If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).
//
// For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome).
// There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.
//
// As another example, given the string "google", you should return "elgoogle".

/**
 * Finds the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word.
 * @param {string} word
 * @return {string}
 */
function buildPalindromeByFewestInsertions(word) {
  // return buildPalindromeByFewestInsertionsR(word);

  const memo = new Map();
  return buildPalindromeByFewestInsertionsMemo(word, memo);
}

function buildPalindromeByFewestInsertionsR(word) {
  if (isPalindrome(word)) return word;

  if (word.charAt(0) === word.charAt(word.length - 1)) {
    return (
      word.charAt(0) +
      buildPalindromeByFewestInsertions(word.substring(1, word.length - 1)) +
      word.charAt(word.length - 1)
    );
  }

  const pal1 =
    word.charAt(0) +
    buildPalindromeByFewestInsertions(word.substring(1)) +
    word.charAt(0);
  const pal2 =
    word.charAt(word.length - 1) +
    buildPalindromeByFewestInsertions(word.substring(0, word.length - 1)) +
    word.charAt(word.length - 1);

  if (pal1.length < pal2.length) return pal1;
  if (pal1.length > pal2.length) return pal2;
  return pal1.localeCompare(pal2) < 0 ? pal1 : pal2;
}

function buildPalindromeByFewestInsertionsMemo(word, memo) {
  if (isPalindrome(word)) return word;
  if (memo.has(word)) return memo.get(word);

  if (word.charAt(0) === word.charAt(word.length - 1)) {
    const palindrome =
      word.charAt(0) +
      buildPalindromeByFewestInsertions(word.substring(1, word.length - 1)) +
      word.charAt(word.length - 1);

    memo.set(word, palindrome);
    return palindrome;
  }

  const pal1 =
    word.charAt(0) +
    buildPalindromeByFewestInsertions(word.substring(1)) +
    word.charAt(0);
  const pal2 =
    word.charAt(word.length - 1) +
    buildPalindromeByFewestInsertions(word.substring(0, word.length - 1)) +
    word.charAt(word.length - 1);

  if (pal1.length < pal2.length) {
    memo.set(word, pal1);
    return pal1;
  }
  if (pal1.length > pal2.length) {
    memo.set(word, pal2);
    return pal2;
  }

  // same length palindromes
  if (pal1.localeCompare(pal2) < 0) {
    memo.set(word, pal1);
    return pal1;
  }
  memo.set(word, pal2);
  return pal2;
}

function isPalindrome(word) {
  return (
    word ===
    word
      .split('')
      .reverse()
      .join('')
  );
}

export default buildPalindromeByFewestInsertions;
