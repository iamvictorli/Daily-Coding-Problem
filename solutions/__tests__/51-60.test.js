import LRUCache from '../51-60/Problem52';
import Queue from '../51-60/Problem53';
import sudokuSolve from '../51-60/Problem54';
import URLShortener from '../51-60/Problem55';
import kColors from '../51-60/Problem56';
import wordWrap from '../51-60/Problem57';
import searchRotatedArray from '../51-60/Problem58';

describe('Problems 51 - 60', () => {
  test('Problem 52 LRU Cache', () => {
    const cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.set(3, 3);
    expect(cache.get(2)).toBeNull();
    cache.set(4, 4);
    expect(cache.get(1)).toBeNull();
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test('Problem 53 Implement Queue using Stacks', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);

    queue.enqueue(4);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);

    expect(() => {
      queue.dequeue();
    }).toThrow();
  });

  test('Problem 54 Sudoku Solver', () => {
    const board = [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ];

    sudokuSolve(board);

    expect(board).toEqual([
      ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
      ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
      ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
      ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
      ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
      ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
      ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
      ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
      ['3', '4', '5', '2', '8', '6', '1', '7', '9']
    ]);
  });

  test('Problem 55 URL Shortener', () => {
    const urlShortener = new URLShortener();
    expect(urlShortener.restore(urlShortener.shorten('www.google.com'))).toBe(
      'www.google.com'
    );
  });

  test('Problem 56 M Coloring', () => {
    const graph = [
      [0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0]
    ];

    expect(kColors(graph, 5)).toBe(true);
    expect(kColors(graph, 4)).toBe(false);
    expect(kColors(graph, 3)).toBe(false);

    // https://github.com/Li-Victor/daily-coding-problem/blob/master/assets/Graph-Coloring.png
    // top down left to right

    const graph1 = [
      [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0]
    ];

    expect(kColors(graph1, 4)).toBe(true);
    expect(kColors(graph1, 3)).toBe(true);
    expect(kColors(graph1, 2)).toBe(false);
  });

  test('Problem 57 Word Wrap', () => {
    expect(wordWrap('the quick brown fox jumps over the lazy dog', 10)).toEqual(
      ['the quick', 'brown fox', 'jumps over', 'the lazy', 'dog']
    );

    expect(wordWrap('the quick brown fox jumps over the lazy dog', 5)).toEqual([
      'the',
      'quick',
      'brown',
      'fox',
      'jumps',
      'over',
      'the',
      'lazy',
      'dog'
    ]);

    expect(
      wordWrap('the quick brown fox jumps over the lazy dog', 4)
    ).toBeNull();
  });

  test('Problem 58 Search in a Rotated Sorted Array', () => {
    expect(searchRotatedArray([13, 18, 25, 2, 8, 10], 8)).toBe(4);
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBeNull();
  });
});
