import pow from '../61-70/Problem61';
import uniquePaths from '../61-70/Problem62';
import wordSearch from '../61-70/Problem63';
import spiralOrder from '../61-70/Problem65';
import LFUCache from '../61-70/Problem67';
import maximumProduct from '../61-70/Problem69';

describe('Problems 61 - 70', () => {
  test('Problem 61 Pow(x, y)', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(2, -2)).toBe(0.25);
  });

  test('Problem 62 Unique Paths', () => {
    expect(uniquePaths(2, 2)).toBe(2);
    expect(uniquePaths(5, 5)).toBe(70);
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
  });

  test('Problem 63 Word Search', () => {
    const board = [
      ['F', 'A', 'C', 'I'],
      ['O', 'B', 'Q', 'P'],
      ['A', 'N', 'O', 'B'],
      ['M', 'A', 'S', 'S']
    ];

    expect(wordSearch(board, 'FOAM')).toBe(true);
    expect(wordSearch(board, 'MASS')).toBe(true);
    expect(wordSearch(board, 'MASSS')).toBe(false);
    expect(wordSearch(board, 'FACE')).toBe(false);
    expect(wordSearch(board, 'ASS')).toBe(true);
    expect(wordSearch(board, 'PBS')).toBe(true);
    expect(wordSearch(board, 'SS')).toBe(true);
    expect(wordSearch(board, 'BS')).toBe(true);
    expect(wordSearch(board, 'AS')).toBe(true);
    expect(wordSearch(board, 'AM')).toBe(true);
    expect(wordSearch(board, 'MACE')).toBe(false);
  });

  test('Problem 65 Spiral Order', () => {
    expect(
      spiralOrder([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
      ])
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      10,
      15,
      20,
      19,
      18,
      17,
      16,
      11,
      6,
      7,
      8,
      9,
      14,
      13,
      12
    ]);

    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
      1,
      2,
      3,
      6,
      9,
      8,
      7,
      4,
      5
    ]);

    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([
      1,
      2,
      3,
      4,
      8,
      12,
      11,
      10,
      9,
      5,
      6,
      7
    ]);
  });

  test.skip('Problem 67 LFU Cache', () => {
    const cache = new LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);

    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);

    cache.put(4, 4);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test('Problem 69 Maximum Product of Three Numbers', () => {
    expect(maximumProduct([-10, -10, 5, 2])).toBe(500);
    expect(maximumProduct([1, 2, 3])).toBe(6);
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
  });
});
