import primeSumPair from '../101-110/Problem101';

describe('Problem 101 - 110', () => {
  test('Problem 101 Find two prime numbers with the given sum', () => {
    expect(primeSumPair(4)).toEqual([2, 2]);
    expect(primeSumPair(74)).toEqual([3, 71]);
    expect(primeSumPair(1024)).toEqual([3, 1021]);
    expect(primeSumPair(66)).toEqual([5, 61]);
    expect(primeSumPair(9990)).toEqual([17, 9973]);
  });
});
