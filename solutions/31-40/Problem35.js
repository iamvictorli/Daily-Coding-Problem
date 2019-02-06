// Problem 35
//
// This problem was asked by Google.
//
// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
//
// Do this in linear time and in-place.
//
// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
//
// https://leetcode.com/problems/sort-colors/description/
// https://en.wikipedia.org/wiki/Dutch_national_flag_problem
//
// O(N) Time Complexity
// O(1) Space Complexity
// N is the length of array

/**
 * Segregates the values of the array so that all the Rs come first, Gs second, and Bs last
 * @param {string[]} colors
 */
function sortColors(colors) {
  let low = 0; // index of where 'R' should be replaced
  let high = colors.length - 1; // index of where 'B' should be replaced
  let curr = 0;

  while (curr <= high) {
    if (colors[curr] === 'R') {
      swap(colors, curr, low);
      low++;
      curr++;
    } else if (colors[curr] === 'B') {
      swap(colors, curr, high);
      high--;
    } else {
      curr++;
    }
  }
}

function swap(colors, idx1, idx2) {
  const temp = colors[idx1];
  colors[idx1] = colors[idx2];
  colors[idx2] = temp;
}

export default sortColors;
