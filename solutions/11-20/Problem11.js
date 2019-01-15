// Problem 11
//
// This problem was asked by Twitter.
//
// Implement an autocomplete system.
// That is, given a query string s and a set of all possible query strings,
// return all strings in the set that have s as a prefix.
//
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
//
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
//
// O(WL) Time complexity
// O(L) Space complexity
// W is number of words in the list and L is the length of the word

class TrieNode {
  /**
   * Initializes a TrieNode with a character
   * Maps a character to a TrieNode
   * @param {*} char The character stored in this node
   */
  constructor(char) {
    this.char = char;
    this.isCompleted = false;
    this.children = new Map();
  }
}

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

/**
 * Returns the words that has this prefix
 * @param {string} prefix
 * @param {string[]} words
 * @return {string[]}
 */
function getWordsWithPrefix(prefix, words) {
  const trie = new Trie();
  // insert all words into trie
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  const list = [];

  let currTrieNode = trie.root;

  // get to current level of prefix
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix.charAt(i);
    if (!currTrieNode.children.has(char)) return list; // no words at this level
    currTrieNode = currTrieNode.children.get(char);
  }

  // at this level of the trie, search for all the completed words
  getWords(currTrieNode, prefix, list);
  return list;
}

/**
 * Returns all the completed words of this level of the trie
 * Performs a depth first search (DFS)
 * @param {TrieNode} trieNode
 * @param {string} prefix
 * @param {string[]} list
 */
function getWords(trieNode, prefix, list) {
  if (trieNode.isCompleted) list.push(prefix);

  const { children } = trieNode;
  if (children.size === 0) return;

  const characters = Array.from(children.keys());

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    getWords(children.get(char), prefix + char, list); // recursive call on its children
  }
}

export default getWordsWithPrefix;
