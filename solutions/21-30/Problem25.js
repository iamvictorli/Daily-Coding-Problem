// Problem 25
//
// This problem was asked by Facebook.
//
// Implement regular expression matching with the following special characters:
//
// . (period) which matches any single character
// * (asterisk) which matches zero or more of the preceding element
//
// That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.
//
// For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.
//
// Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.
//
// https://leetcode.com/problems/regular-expression-matching/description/
//
// O(MN) Time and Space complexity
// M is the length of the pattern and N is length of the text

function matchesRegularExpression(pattern, text) {
  const dp = [...Array(text.length + 1)].map(() =>
    Array(pattern.length + 1).fill(false)
  );
  dp[0][0] = true;

  for (let i = 1; i < dp[0].length; i++) {
    // //Deals with patterns like a* or a*b* or a*b*c*
    if (pattern.charAt(i - 1) === '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      const textChar = text.charAt(r - 1);
      const patternChar = pattern.charAt(c - 1);

      if (patternChar === '.' || patternChar === textChar) {
        dp[r][c] = dp[r - 1][c - 1];
      } else if (patternChar === '*') {
        dp[r][c] = dp[r][c - 2]; // dp[r][c - 2] checks for (char)*. 0 length

        const beforeStarChar = pattern.charAt(c - 2); // the character before the star

        if (beforeStarChar === '.' || beforeStarChar === textChar) {
          dp[r][c] = dp[r][c] || dp[r - 1][c];
        }
      } else {
        dp[r][c] = false;
      }
    }
  }
  return dp[text.length][pattern.length];
}

export default matchesRegularExpression;
