// Problem 29
//
// This problem was asked by Amazon.
//
// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character.
//
// For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
//
// Implement run-length encoding and decoding.
// You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

/**
 * Returns the encoding of string
 * @param {string} string
 * @return {string}
 */
function stringEncoding(string) {
  if (string.length === 0) return '';

  let currChar = string.charAt(0);
  let count = 1;
  let encoding = '';

  for (let i = 1; i < string.length; i++) {
    const char = string.charAt(i);
    if (char === currChar) count++;
    else {
      encoding += count + currChar;

      // reset
      count = 1;
      currChar = char;
    }
  }

  encoding += count + currChar;

  return encoding;
}

/**
 * Returns the decoding of string
 * @param {string} string
 * @return {string}
 */
function stringDecoding(string) {
  if (string.length === 0) return '';
  let currCount = 0;
  let i = 0;
  let decoding = '';

  while (i < string.length) {
    const char = string.charAt(i);
    if (isNumber(char)) {
      const num = Number(char);
      currCount = currCount * 10 + num;
    } else {
      decoding = addCountAmount(decoding, char, currCount);
      currCount = 0;
    }

    i++;
  }

  return decoding;
}

/**
 * Returns the X count of chars to end of string
 */
function addCountAmount(string, char, count) {
  for (let i = 1; i <= count; i++) {
    string += char;
  }

  return string;
}

/**
 * Returns true if the character is a number
 * @param {string} char
 * @return {boolean}
 */
function isNumber(char) {
  return !Number.isNaN(Number(char));
}

export { stringEncoding, stringDecoding };
