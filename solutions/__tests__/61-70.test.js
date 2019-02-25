import pow from '../61-70/Problem61';
import uniquePaths from '../61-70/Problem62';
import wordSearch from '../61-70/Problem63';

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
});
