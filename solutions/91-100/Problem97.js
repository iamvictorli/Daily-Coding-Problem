// Problem 97
//
// This problem was asked by Stripe.
//
// Write a map implementation with a get function that lets you retrieve the value of a key at a particular time.
//
// It should contain the following methods:
//
// set(key, value, time): sets key to value for t = time.
// get(key, time): gets the key at t = time.
// The map should work like this. If we set a key at a particular time, it will maintain that value forever or until it gets set at a later time. In other words, when we get a key at a time, it should return the value that was set for that key set at the most recent time.
//
// Consider the following examples:
//
// d.set(1, 1, 0) # set key 1 to value 1 at time 0
// d.set(1, 2, 2) # set key 1 to value 2 at time 2
// d.get(1, 1) # get key 1 at time 1 should be 1
// d.get(1, 3) # get key 1 at time 3 should be 2
// d.set(1, 1, 5) # set key 1 to value 1 at time 5
// d.get(1, 0) # get key 1 at time 0 should be null
// d.get(1, 10) # get key 1 at time 10 should be 1
// d.set(1, 1, 0) # set key 1 to value 1 at time 0
// d.set(1, 2, 0) # set key 1 to value 2 at time 0
// d.get(1, 0) # get key 1 at time 0 should be 2
//
// Set operation: O(N) Time complexity. O(N) Space complexity
// Get operation: O(N) Time complexity. O(N) Space complexity
// Can cut down time complexity to O(log N) by using a search tree instead of an array

class MapWithTime {
  constructor() {
    this.map = new Map();
  }

  /**
   * Set the key to value for t = time
   * @param {any} key
   * @param {any} value
   * @param {number} time
   */
  set(key, value, time) {
    if (!this.map.has(key)) {
      const arr = [{ value, time }];
      this.map.set(key, arr);
    } else {
      const arr = this.map.get(key);

      // check all elements in arr.
      // If one contains the same value. Rewrite the time
      // else push new element of value, time

      let found = false;
      const updatedArr = arr.map(element => {
        const { value: eValue } = element;
        if (eValue !== value) return element;
        found = true;
        return {
          value,
          time
        };
      });

      if (!found) {
        updatedArr.push({ value, time });
      }

      this.map.set(key, updatedArr);
    }
  }

  /**
   * Gets the key at time t
   * @param {any} key
   * @param {number} time
   * @return {any}
   */
  get(key, time) {
    // get biggest time smaller or equal to time
    if (!this.map.has(key)) return null;

    const arr = this.map.get(key);

    let value = null;
    let biggestTimeSmallerThanTime = null;

    for (let i = 0; i < arr.length; i++) {
      const { value: eValue, time: eTime } = arr[i];
      if (eTime > time) continue;

      if (value === null && biggestTimeSmallerThanTime === null) {
        value = eValue;
        biggestTimeSmallerThanTime = eTime;
      }

      if (eTime >= biggestTimeSmallerThanTime) {
        value = eValue;
        biggestTimeSmallerThanTime = eTime;
      }
    }

    return value;
  }
}

export default MapWithTime;
