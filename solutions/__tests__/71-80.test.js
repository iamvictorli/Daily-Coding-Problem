import LinkedListNode from '../Data-Structures/LinkedListNode';

import largestPathValue from '../71-80/Problem72';
import reverseLinkedList from '../71-80/Problem73';
import multiplicationTable from '../71-80/Problem74';
import longestIncreasingSubsequence from '../71-80/Problem75';
import colRemoved from '../71-80/Problem76';

describe('Problems 71 - 80', () => {
  test('Problem 72 Largest Path Value in a Graph', () => {
    expect(largestPathValue('ABACA', [[0, 1], [0, 2], [2, 3], [3, 4]])).toBe(3);
    expect(largestPathValue('A', [[0, 0]])).toBeNull();

    expect(
      largestPathValue('AAAAAA', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(6);

    expect(
      largestPathValue('AAAABB', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(4);
  });

  test('Problem 73 Reverse Linked List', () => {
    const head = new LinkedListNode(1);
    head.next = new LinkedListNode(2);
    head.next.next = new LinkedListNode(3);
    head.next.next.next = new LinkedListNode(4);
    head.next.next.next.next = new LinkedListNode(5);

    const reversedHead = new LinkedListNode(5);
    reversedHead.next = new LinkedListNode(4);
    reversedHead.next.next = new LinkedListNode(3);
    reversedHead.next.next.next = new LinkedListNode(2);
    reversedHead.next.next.next.next = new LinkedListNode(1);

    expect(reverseLinkedList(head)).toEqual(reversedHead);
  });

  test('Problem 74 Multiplication Table', () => {
    expect(multiplicationTable(6, 12)).toBe(4);
    expect(multiplicationTable(3, 9)).toBe(1);
    expect(multiplicationTable(3, 6)).toBe(2);
    expect(multiplicationTable(3, 1)).toBe(1);
  });

  test('Problem 75 Longest Increasing Subsequence', () => {
    expect(
      longestIncreasingSubsequence([
        0,
        8,
        4,
        12,
        2,
        10,
        6,
        14,
        1,
        9,
        5,
        13,
        3,
        11,
        7,
        15
      ])
    ).toBe(6);
    expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(longestIncreasingSubsequence([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
  });

  test('Problem 76 Columns Removed To Make Rows Ordered Lexicographically ', () => {
    expect(
      colRemoved([['c', 'b', 'a'], ['d', 'a', 'f'], ['g', 'h', 'i']])
    ).toBe(1);

    expect(colRemoved([['c', 'a'], ['d', 'f'], ['g', 'i']])).toBe(0);

    expect(colRemoved([['a', 'b', 'c', 'd', 'e', 'f']])).toBe(0);
  });

  expect(colRemoved([['z', 'y', 'x'], ['w', 'v', 'u'], ['t', 's', 'r']])).toBe(
    3
  );
});
