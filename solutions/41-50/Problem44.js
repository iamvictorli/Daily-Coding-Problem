// Problem 44
//
// This problem was asked by Google.
//
// We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.
//
// Given an array, count the number of inversions it has. Do this faster than O(N^2) time.
//
// You may assume each element in the array is distinct.
//
// For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.
//
// O(N log N) Time complexity
// O(N) Space complexity
// N is the number of elements in the array

/**
 * Returns the number of inversions in nums
 * @param {number[]} nums
 * @return {number}
 */
function countInversions(nums) {
  // Use merge sort to count inversions
  const aux = Array(nums.length);
  return mergeSort(nums, aux, 0, nums.length - 1);
}

/**
 * Recursive split method of merge sort
 * @param {number[]} nums
 * @param {number[]} aux
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function mergeSort(nums, aux, low, high) {
  let inversions = 0;
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    inversions = mergeSort(nums, aux, low, mid);
    inversions += mergeSort(nums, aux, mid + 1, high);

    inversions += merge(nums, aux, low, mid, high);
  }
  return inversions;
}

/**
 * Merge process of merge sort, and returns inversion count
 * @param {number[]} nums
 * @param {number[]} aux
 * @param {number} low
 * @param {number} mid
 * @param {number} high
 * @return {number}
 */
function merge(nums, aux, low, mid, high) {
  let inversions = 0;
  // Copy both halves into aux
  for (let i = low; i <= high; i++) {
    aux[i] = nums[i];
  }

  let helperLeft = low;
  let helperRight = mid + 1;
  let current = low;

  // Iterate through helper array. Compare left and right, copying back the smaller element of both halves
  while (helperLeft <= mid && helperRight <= high) {
    if (aux[helperLeft] <= aux[helperRight]) {
      nums[current] = aux[helperLeft];
      helperLeft++;
    } else {
      nums[current] = aux[helperRight];
      helperRight++;
      inversions += mid - helperLeft + 1; // Where we count the number of inversions
    }
    current++;
  }

  // copy the rest of the left side of the array into the target array
  const remaining = mid - helperLeft;
  for (let i = 0; i <= remaining; i++) {
    nums[current + i] = aux[helperLeft + i];
  }

  return inversions;
}

export default countInversions;
