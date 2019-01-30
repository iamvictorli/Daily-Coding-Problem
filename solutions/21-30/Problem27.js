// Problem 27
//
// This problem was asked by Facebook.
//
// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
//
// For example, given the string "([])[]({})", you should return true.
//
// Given the string "([)]" or "((()", you should return false.
//
// https://leetcode.com/problems/valid-parentheses/description/
//
// O(N) Time and Space Complexity

function validBrackets(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    const bracket = string.charAt(i);

    // push opening brackets onto stack
    if (bracket === '(' || bracket === '[' || bracket === '{')
      stack.push(bracket);
    else {
      // closing brackets
      const openingBracket = stack.pop();
      if (openingBracket === undefined) return false;
      if (!isMatch(openingBracket, bracket)) return false;
    }
  }

  return stack.length === 0;
}

function isMatch(opening, closing) {
  return (
    (opening === '(' && closing === ')') ||
    (opening === '[' && closing === ']') ||
    (opening === '{' && closing === '}')
  );
}

export default validBrackets;
