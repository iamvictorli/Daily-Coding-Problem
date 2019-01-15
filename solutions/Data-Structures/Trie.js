import TrieNode from './TreeNode';

class Trie {
  /**
   * Initializes a Trie
   */
  constructor() {
    this.root = new TrieNode('*');
  }

  /**
   * Inserts a word into trie
   * @param {string} word
   */
  insert(word) {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const { children } = currNode;
      const char = word.charAt(i);

      if (!children.has(char)) {
        // set new Trie Node if there isnt
        children.set(char, new TrieNode(char));
      }

      currNode = children.get(char);
    }
    // this node is a leaf node and is a word
    currNode.isCompleted = true;
  }
}

export default Trie;
