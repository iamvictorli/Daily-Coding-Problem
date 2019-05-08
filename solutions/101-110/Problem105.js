// Problem 105
//
// This problem was asked by Facebook.
//
// Given a function f, and N return a debounced f of N milliseconds.
//
// That is, as long as the debounced f continues to be invoked, f itself will not be called for N milliseconds.

/**
 * Debounced function, as long as the debounced function is called, f function will not be called for N milliseconds
 * @param {Function} f
 * @param {number} N
 * @return {Function}
 */
function debounce(f, N) {
  let timeout = null;

  return function debounceFunction(...args) {
    const context = this;

    const functionCall = () => {
      timeout = null;
      f.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, N);
  };
}

export default debounce;
