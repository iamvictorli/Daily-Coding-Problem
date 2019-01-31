// Problem 28
//
// This problem was asked by Palantir.
//
// Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.
//
// More specifically, you should have as many words as possible in each line.
// There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k.
// Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.
//
// If you can only fit one word on a line, then you should pad the right-hand side with spaces.
//
// Each word is guaranteed not to be longer than k.
//
// For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:
//
// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly
//
// https://leetcode.com/problems/text-justification/description/
//
// O(N) Time complexity
// O(N) Space complexity
// N is the length of the string

/**
 * Returns a list of strings which represents each line, fully justified
 * @param {string[]} words
 * @param {number} length
 * @return {string[]}
 */
function textJustification(words, lengthLine) {
  const justifiedLines = [];
  let currLength = -1;
  let currWords = []; // current words for each line

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currLength + word.length + 1 > lengthLine) {
      const justifiedLine = justify(currWords, currLength, lengthLine);
      justifiedLines.push(justifiedLine);

      // reset
      currLength = -1;
      currWords = [];
    }

    currLength += word.length + 1;
    currWords.push(word);
  }

  // last line, check if there are still words
  if (currWords.length > 0) {
    const justifiedLine = justify(currWords, currLength, lengthLine);
    justifiedLines.push(justifiedLine);
  }

  return justifiedLines;
}

/**
 * Returns the justified line based on the current words, current length, and the max length of the line
 * @param {string[]} currWords
 * @param {number} currLength
 * @param {number} lengthLine
 * @return {string}
 */
function justify(currWords, currLength, lengthLine) {
  const spacesToAdd = lengthLine - currLength;
  const guaranteedSpaces = 1 + Math.floor(spacesToAdd / (currWords.length - 1));
  const bonusSpaceRecipients = spacesToAdd % (currWords.length - 1);

  let line = '';

  // not include the last word
  for (let i = 0; i < currWords.length - 1; i++) {
    const word = currWords[i];
    line += word;

    for (let j = 0; j < guaranteedSpaces; j++) {
      line += ' ';
    }

    if (i < bonusSpaceRecipients) line += ' ';
  }

  line += currWords[currWords.length - 1]; // add the last word

  return line;
}

export default textJustification;
