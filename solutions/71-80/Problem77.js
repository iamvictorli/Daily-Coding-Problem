// Problem 77
//
// This problem was asked by Snapchat.
//
// Given a list of possibly overlapping intervals,
// return a new list of intervals where all overlapping intervals have been merged.
//
// The input list is not necessarily ordered in any way.
//
// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
//
// https://leetcode.com/problems/merge-intervals/
//
// O(N Log N) Time complexity
// O(1) Space complexity

/**
 * Returns a new list of intervals where all overlapping intervals have been merged
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
  if (intervals.length === 0 || intervals.length === 1) return intervals;

  // Sort intervals by their start
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = curr;
    const [intervalStart, intervalEnd] = intervals[i];

    if (intervalStart <= currEnd) {
      // merge and make curr
      curr = [currStart, Math.max(currEnd, intervalEnd)];
    } else {
      merged.push([currStart, currEnd]);
      curr = intervals[i];
    }
  }

  merged.push(curr);

  return merged;
}

export default mergeIntervals;
