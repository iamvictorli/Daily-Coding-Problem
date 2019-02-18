// Problem 51
//
// This problem was asked by Facebook.
//
// Given a function that generates perfectly random numbers between 1 and k (inclusive),
// where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.
//
// It should run in O(N) time.
//
// Hint: Make sure each one of the 52! permutations of the deck is equally likely.
//
// https://leetcode.com/problems/shuffle-an-array/description/
// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in cards

/**
 * Shuffles a deck of cards represented as an array using only swaps
 * @param {number[]} cards
 */
function shuffle(cards) {
  for (let i = cards.length - 1; i >= 1; i--) {
    const rand = random(i);
    swap(cards, i, rand);
  }
}

/**
 * Returns a random number between 0 and k (inclusive)
 */
function random(k) {
  return Math.floor(Math.random() * (k + 1));
}

/**
 * Swaps two index of an array
 * @param {number[]} arr
 * @param {number} idx1
 * @param {number} idx2
 */
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

export default shuffle;
