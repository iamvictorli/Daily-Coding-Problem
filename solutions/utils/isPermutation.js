/**
 * Checks if arr1 is a permutation of arr2
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @return {boolean}
 */
function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // map item to count
  const map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    if (map.has(item1)) map.set(item1, map.get(item1) + 1);
    else map.set(item1, 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    const item2 = arr2[i];
    if (!map.has(item2)) return false;
    const count = map.get(item2);

    if (count === 1) map.delete(item2);
    else map.set(item2, count - 1);
  }

  return map.size === 0;
}

export default isPermutation;
