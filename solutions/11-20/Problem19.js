/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^minCostHouseColor" }] */

// Problem 19
//
// This problem was asked by Facebook.
//
// A builder is looking to build a row of N houses that can be of K different colors.
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
//
// Given an N by K matrix where the nth row and kth column
// represents the cost to build the nth house with kth color,
// return the minimum cost which achieves this goal.
//
// O(NK) Time complexity
// O(1) Space complexity

/**
 * Returns the minimum cost of building N houses with K different colors, with no two neighboring houses being the same color.
 * Best solution builds off the previous
 * @param {number[]} costs
 * @return {number}
 */
function minCostHouseColor(costs) {
  // return minCostHouseColorInitialSolution(costs);
  // return minCostHouseColorII(costs);
  // return minCostHouseColorIII(costs);
  return minCostHouseColorBest(costs);
}

/**
 * O(NKK) Time complexity and O(NK) Space complexity
 * @param {number[]} costs
 * @return {number}
 */
function minCostHouseColorInitialSolution(costs) {
  if (costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  // 2d array with n length and k rows
  const dp = [...Array(n)].map(() => Array(k));

  // fill first row
  for (let col = 0; col < k; col++) {
    dp[0][col] = costs[0][col];
  }

  for (let row = 1; row < n; row++) {
    // Finding the lowest costs for each column in this row
    for (let col = 0; col < k; col++) {
      dp[row][col] = Number.MAX_SAFE_INTEGER;

      for (let numCol = 0; numCol < k; numCol++) {
        // we dont want the same column, as that is 2 houses of same color
        if (numCol !== col) {
          dp[row][col] = Math.min(
            dp[row][col],
            dp[row - 1][numCol] + costs[row][col]
          );
        }
      }
    }
  }

  let minCost = Number.MAX_SAFE_INTEGER;
  // get minimum of last row in dp table
  for (let col = 0; col < k; col++) {
    minCost = Math.min(minCost, dp[n - 1][col]);
  }

  return minCost;
}

/**
 * Still O(NKK) Time Complexity, but O(K) Space Complexity
 * @param {number[]} costs
 * @return {number}
 */
function minCostHouseColorII(costs) {
  if (costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  const dp1 = []; // the last row
  const dp2 = []; // the current row

  // start the first row of costs, as the last row, and build from the second row onwards
  for (let i = 0; i < k; i++) {
    dp1[i] = costs[0][i];
  }

  for (let row = 1; row < n; row++) {
    for (let j = 0; j < k; j++) {
      // Finding the lowest costs for each column in this row
      dp2[j] = Number.MAX_SAFE_INTEGER;

      for (let m = 0; m < k; m++) {
        if (m !== j) {
          dp2[j] = Math.min(dp2[j], dp1[m] + costs[row][j]);
        }
      }
    }

    // copy all the current row to last row
    for (let j = 0; j < k; j++) {
      dp1[j] = dp2[j];
    }
  }

  let minCost = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < k; i++) {
    minCost = Math.min(minCost, dp1[i]);
  }
  return minCost;
}

/**
 * O(NK) Time Complexity and O(K) Space Complexity
 * @param {number[]} costs
 * @return {number}
 */
function minCostHouseColorIII(costs) {
  if (costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  // dp[j] means the min cost for color j
  const dp = [];
  let min1 = 0; // the lowest cost at the previous row
  let min2 = 0; // the second lowest cost at the previous row

  for (let i = 0; i < n; i++) {
    const oldMin1 = min1;
    const oldMin2 = min2;

    min1 = Number.MAX_SAFE_INTEGER;
    min2 = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < k; j++) {
      if (dp[j] !== oldMin1 || oldMin1 === oldMin2) {
        dp[j] = oldMin1 + costs[i][j];
      } else {
        dp[j] = oldMin2 + costs[i][j];
      }

      if (min1 <= dp[j]) {
        min2 = Math.min(min2, dp[j]);
      } else {
        min2 = min1;
        min1 = dp[j];
      }
    }
  }
  return min1;
}

/**
 * O(NK) Time Complexity and O(1) Space Complexity
 * @param {number[]} costs
 * @return {number}
 */
function minCostHouseColorBest(costs) {
  if (costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  let min1 = 0;
  let min2 = 0;
  let idx1 = -1;

  for (let i = 0; i < n; i++) {
    let m1 = Number.MAX_SAFE_INTEGER;
    let m2 = Number.MAX_SAFE_INTEGER;
    let idx2 = -1;

    for (let j = 0; j < k; j++) {
      let cost = costs[i][j];
      cost += j === idx1 ? min2 : min1;

      if (cost < m1) {
        m2 = m1;
        m1 = cost;
        idx2 = j;
      } else if (cost < m2) {
        m2 = cost;
      }
    }

    min1 = m1;
    min2 = m2;
    idx1 = idx2;
  }

  return min1;
}

export default minCostHouseColor;
