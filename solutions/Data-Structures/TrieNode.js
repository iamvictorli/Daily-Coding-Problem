class TrieNode {
  /**
   * Initializes a TrieNode with a character
   * @param {*} char The character stored in this node
   */
  constructor(char) {
    this.char = char;
    this.isCompleted = false;
    this.children = new Map();
  }
}

export default TrieNode;
