// Problem 10
//
// This problem was asked by Apple.
//
// Implement a job scheduler which takes in a function f and an integer n,
// and calls f after n milliseconds.
//

/**
 * Calls function fn after n milliseconds
 * @param {function} fn
 * @param {number} n
 */
function Schedule(fn, n) {
  setTimeout(() => {
    fn();
  }, n);
}

export default Schedule;
