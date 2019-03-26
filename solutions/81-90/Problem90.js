// Problem 90
//
// This question was asked by Google.
//
// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
//
// O(N) Time complexity
// O(N) Space complexity

function random(n, list) {
  // instead of continually generating random numbers between 0 to n - 1, and seeing if they are not in the list
  // generate a list that has numbers between 0 to n - 1 that is not part of exlusion list
  // and randomly pick an element off that list.

  const randList = [];
  const set = new Set(list);
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) randList.push(i);
  }

  if (n === 0) return set.has(0) ? -1 : 0;
  const randomIndex = Math.floor(Math.random() * n);
  return randList[randomIndex];
}

export default random;
