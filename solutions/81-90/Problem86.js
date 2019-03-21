// Problem 86
//
// This problem was asked by Google.
//
// Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
//
// For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the length of the string

/**
 * Computes the minimum number of parantheses to remove to make the string valid
 * @param {string} s
 * @return {number}
 */
function minParenToRemove(s) {
  let open = 0;
  let remove = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(') open++;
    else if (char === ')') {
      // no more open paran to be closed
      if (open === 0) remove++;
      else open--;
    }
  }

  return remove + open;
}

export default minParenToRemove;
