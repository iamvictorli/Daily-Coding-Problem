// Problem 55
//
// This problem was asked by Microsoft.
//
// Implement a URL shortener with the following methods:
//
// shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
// restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
// Hint: What if we enter the same URL twice?
//
// https://leetcode.com/problems/encode-and-decode-tinyurl/description/
//
// Both methods are O(1) Time complexity and O(N) Space complexity.
// N is the number of urls

class URLShortener {
  /**
   * Initializes a URL Shortener
   */
  constructor() {
    this.charSet =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.length = 6;

    // bidirectional maps
    this.shortToURL = new Map();
    this.URLtoShort = new Map();
  }

  /**
   * Returns a random encoding
   * @return {string}
   */
  createEncoding() {
    let encoding = '';
    for (let i = 0; i < this.length; i++) {
      const random = Math.floor(Math.random() * this.charSet.length);
      encoding += this.charSet.charAt(random);
    }

    return encoding;
  }

  /**
   * Given a shortened url, returns a six-character alphanumeric string
   * @param {string} url
   * @return {string}
   */
  shorten(url) {
    if (this.URLtoShort.has(url)) return this.URLtoShort.get(url);

    let shortened = this.createEncoding(url);
    while (this.shortToURL.has(shortened)) shortened = this.createEncoding();

    this.URLtoShort.set(url, shortened);
    this.shortToURL.set(shortened, url);
    return shortened;
  }

  /**
   * Given a shorted string, returns the original url
   * @param {string} short
   * @return {string?}
   */
  restore(short) {
    if (this.shortToURL.has(short)) return this.shortToURL.get(short);
    return null;
  }
}

export default URLShortener;
