// Problem 57
//
// This problem was asked by Amazon.
//
// Given a string s and an integer k, break up the string into multiple texts such that each text has a length of k or less.
// You must break it up so that words don't break across lines.
// If there's no way to break the text up, then return null.
//
// You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.
//
// For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10,
// you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"].
// No string in the list has a length of more than 10.
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of words in the sentence

/**
 * Breaks up the string into multiple texts, such that each text has a length of k or less
 * @param {string} s
 * @param {number} k
 * @return {string[]?}
 */
function wordWrap(s, k) {
  const words = s.split(' ');

  const splitWords = [];
  let currWords = [];
  let currLength = -1;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > k) return null;

    if (currLength + word.length + 1 <= k) {
      currWords.push(word);
      currLength += word.length + 1;
    } else {
      splitWords.push(currWords.join(' '));
      currWords = [word];
      currLength = word.length;
    }
  }

  splitWords.push(currWords.join(' '));
  return splitWords;
}

export default wordWrap;
