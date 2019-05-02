import primeSumPair from '../101-110/Problem101';
import contiguousSum from '../101-110/Problem102';
import minWindow from '../101-110/Problem103';

describe('Problem 101 - 110', () => {
  test('Problem 101 Find two prime numbers with the given sum', () => {
    expect(primeSumPair(4)).toEqual([2, 2]);
    expect(primeSumPair(74)).toEqual([3, 71]);
    expect(primeSumPair(1024)).toEqual([3, 1021]);
    expect(primeSumPair(66)).toEqual([5, 61]);
    expect(primeSumPair(9990)).toEqual([17, 9973]);
  });

  test('Problem 102 Subarray with given sum', () => {
    expect(contiguousSum([1, 2, 3, 4, 5], 9)).toEqual([2, 3, 4]);
    expect(contiguousSum([1, 4, 20, 3, 10, 5], 33)).toEqual([20, 3, 10]);
    expect(contiguousSum([1, 4, 0, 0, 3, 10, 5], 7)).toEqual([4, 0, 0, 3]);
    expect(contiguousSum([1, 4], 0)).toEqual([]);
    expect(contiguousSum([10, 2, -2, -20, 10], -10)).toEqual([10, 2, -2, -20]);
    expect(contiguousSum([3, 5, 10, 2, -2, -20, 10], -10)).toEqual([
      10,
      2,
      -2,
      -20
    ]);
    expect(contiguousSum([-10, 0, 2, -2, -20, 10], 20)).toEqual([]);
    expect(contiguousSum([6, 10, 2, -2, -20, 10], -10)).toEqual([
      10,
      2,
      -2,
      -20
    ]);
    expect(contiguousSum([1, 1, 1, 1], 4)).toEqual([1, 1, 1, 1]);
    expect(contiguousSum([15, 2, 4, 8, 9, 5, 10, 23], 23)).toEqual([
      2,
      4,
      8,
      9
    ]);
    expect(contiguousSum([1, 3, -2, 1], 2)).toEqual([1, 3, -2]);
  });

  test('Problem 103 Minimum Window Substring', () => {
    expect(minWindow('figehaeci', new Set(['a', 'e', 'i']))).toBe('aeci');
    expect(minWindow('figehaeci', new Set(['a', 'e']))).toBe('ae');
    expect(minWindow('figehaeci', new Set(['e', 'a']))).toBe('ae');
    expect(minWindow('figehaeci', new Set(['e', 'a', 'n']))).toBeNull();
    expect(minWindow('adobecodebanc', new Set(['a', 'b', 'c']))).toBe('banc');
    expect(minWindow('a', new Set(['a']))).toBe('a');
  });
});
