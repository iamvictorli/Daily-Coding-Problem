// Problem 14
//
// This problem was asked by Google.
//
// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
//
// Hint: The basic equation of a circle is x^2 + y^2 = r^2.
//
// https://www.geeksforgeeks.org/estimating-value-pi-using-monte-carlo/

/**
 * Returns an estimate of PI. The more tests the more accurate the estimation of PI.
 * @param {number} numberOfTests
 * @return {number}
 */
function estimatePI(numberOfTests) {
  let circlePoints = 0;
  let squarePoints = 0;

  for (let i = 0; i < numberOfTests; i++) {
    const randX = Math.random();
    const randY = Math.random();

    squarePoints++;
    if (randX * randX + randY * randY <= 1) circlePoints++;
  }
  return (4 * circlePoints) / squarePoints;
}

export default estimatePI;
