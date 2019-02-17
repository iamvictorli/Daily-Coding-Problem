// Problem 30
//
// This problem was asked by Facebook.
//
// You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height.
// Suppose it will rain and all spots between two walls get filled up.
//
// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.
//
// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.
//
// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
//
// https://leetcode.com/problems/trapping-rain-water/description/
//
// O(N) Time Complexity
// O(1) Space Complexity
// N is the number of heights

/**
 * Returns the units of water remain trapped on the map
 * @param {number[]} heights
 * @return {number}
 */
function trappingRainWater(heights) {
  // two pointer approach
  let left = 0;
  let right = heights.length - 1;

  let totalWater = 0;
  let currMaxLeftHeight = 0;
  let currMaxRightHeight = 0;

  while (left <= right) {
    if (heights[left] <= heights[right]) {
      // there cannot be water trapped
      if (heights[left] >= currMaxLeftHeight) currMaxLeftHeight = heights[left];
      else {
        const currWaterTrapped = currMaxLeftHeight - heights[left];
        totalWater += currWaterTrapped;
      }

      left++;
    } else {
      // there cannot be water trapped
      if (heights[right] >= currMaxRightHeight)
        currMaxRightHeight = heights[right];
      else {
        const currWaterTrapped = currMaxRightHeight - heights[right];
        totalWater += currWaterTrapped;
      }

      right--;
    }
  }
  return totalWater;
}

export default trappingRainWater;
