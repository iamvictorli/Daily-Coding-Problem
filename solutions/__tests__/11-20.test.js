import LinkedListNode from '../Data-Structures/LinkedListNode';

import getWordsWithPrefix from '../11-20/Problem11';
import { climbStairs1, climbStairs2 } from '../11-20/Problem12';
import kLongestSubstring from '../11-20/Problem13';
import selectRandomizer from '../11-20/Problem15';
import Log from '../11-20/Problem16';
import longestFilePath from '../11-20/Problem17';
import maxSubArrayLengthK from '../11-20/Problem18';
import minCostHouseColor from '../11-20/Problem19';
import findIntersection from '../11-20/Problem20';

describe('Problems 11 - 20', () => {
  test('Problem 11 Get All Words With Prefix', () => {
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.arrayContaining(['deer', 'deal'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.not.arrayContaining(['dog'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toHaveLength(2);

    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['cat'])
    );
    expect(
      getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(3);

    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['cat'])
    );
    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(
      getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(1);

    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual([]);
    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);

    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      []
    );
    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);
  });

  test('Problem 12 Climbing Stairs', () => {
    expect(climbStairs1(4)).toBe(5);
    expect(climbStairs2(4, [1, 2])).toBe(5);

    expect(climbStairs2(4, [1, 2, 3])).toBe(7);
    expect(climbStairs2(7, [1, 3, 5])).toBe(12);
  });

  test('Problem 13 Longest Substring With K Distinct Characters', () => {
    expect(kLongestSubstring('abcba', 2)).toBe('bcb');
    expect(kLongestSubstring('abaacca', 2)).toBe('aacca');
    expect(kLongestSubstring('eceba', 2)).toBe('ece');

    // can be any one of these values
    expect(['aa', 'bb', 'cc']).toContain(kLongestSubstring('aabbcc', 1));
    expect(['aabb', 'bbcc']).toContain(kLongestSubstring('aabbcc', 2));
    expect(kLongestSubstring('aabbcc', 3)).toBe('aabbcc');
    expect(kLongestSubstring('aaaccc', 2)).toBe('aaaccc');

    expect(kLongestSubstring('abcbbbbcccbdddadacb', 2)).toBe('bcbbbbcccb');
    expect(kLongestSubstring('abcadcacacaca', 3)).toBe('cadcacacaca');
  });

  test('Problem 15 Select Random Element From Stream of Elements', () => {
    const stream1 = [1, 2, 3, 4, 5];
    const stream2 = [6, 7, 8, 9, 10];
    const stream3 = [11, 12, 13, 14, 15];
    const randomizer = selectRandomizer();

    const rand1 = randomizer(stream1);
    const rand2 = randomizer(stream2);
    const rand3 = randomizer(stream3);

    expect([1, 2, 3, 4, 5]).toContain(rand1);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(rand2);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).toContain(
      rand3
    );
  });

  test('Problem 16 Record and Get ith last element', () => {
    const orderLog = new Log(5);
    orderLog.record(111);
    orderLog.record(222);
    orderLog.record(333);
    orderLog.record(444);
    orderLog.record(555);

    expect(orderLog.getLast(1)).toBe(555);
    expect(orderLog.getLast(2)).toBe(444);
    expect(orderLog.getLast(3)).toBe(333);
    expect(orderLog.getLast(4)).toBe(222);
    expect(orderLog.getLast(5)).toBe(111);

    orderLog.record(666);
    orderLog.record(777);

    expect(orderLog.getLast(1)).toBe(777);
    expect(orderLog.getLast(2)).toBe(666);
    expect(orderLog.getLast(3)).toBe(555);
    expect(orderLog.getLast(4)).toBe(444);
    expect(orderLog.getLast(5)).toBe(333);
  });

  test('Problem 17 Get the Longest Absolute Path to a File', () => {
    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
      )
    ).toBe(32);

    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\t\t\tfile22.ext'
      )
    ).toBe(33);

    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir11\n\t\t\tfile11.ext\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\t\t\tfile22.ext'
      )
    ).toBe(34);

    expect(longestFilePath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')).toBe(20);

    expect(longestFilePath('dir\n\tsubdir1\n\tsubdir2\n\tsubdir3')).toBe(0);

    expect(
      longestFilePath('dir\n\tsubdir1\n\t\tsubsubdir1\n\tsubdir2\n\tsubdir3')
    ).toBe(0);

    expect(longestFilePath('dir')).toBe(0);
    expect(longestFilePath('dir\n\tfile1.txt')).toBe(13);
  });

  test('Problem 18 Maximum Values of each SubArray of Length k', () => {
    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 3)).toEqual([10, 7, 8, 8]);
    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 1)).toEqual([
      10,
      5,
      2,
      7,
      8,
      7
    ]);

    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 2)).toEqual([
      10,
      5,
      7,
      8,
      8
    ]);
    expect(maxSubArrayLengthK([11, 22], 2)).toEqual([22]);
    expect(maxSubArrayLengthK([11, 33, 22], 3)).toEqual([33]);

    expect(maxSubArrayLengthK([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3,
      3,
      5,
      5,
      6,
      7
    ]);
  });

  test('Problem 19 Paint House in Color With Minimal Cost', () => {
    expect(minCostHouseColor([[17, 2, 17], [16, 16, 5], [14, 3, 9]])).toBe(10);

    expect(
      minCostHouseColor([
        [8, 6, 6, 7, 5, 4],
        [7, 7, 8, 2, 2, 2],
        [9, 9, 4, 3, 2, 1]
      ])
    ).toBe(7);

    expect(
      minCostHouseColor([
        [7, 3, 3, 8, 1, 2],
        [2, 3, 4, 2, 4, 3],
        [4, 5, 9, 8, 1, 6],
        [6, 7, 9, 8, 1, 4]
      ])
    ).toBe(8);
  });

  test('Problem 20 Intersection of Two Linked Lists', () => {
    let list1 = new LinkedListNode(3);
    list1.next = new LinkedListNode(7);

    let list2 = new LinkedListNode(99);
    list2.next = new LinkedListNode(1);

    let intersecting = new LinkedListNode(8);
    intersecting.next = new LinkedListNode(10);

    list1.next.next = intersecting;
    list2.next.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(4);
    list1.next = new LinkedListNode(1);

    list2 = new LinkedListNode(5);
    list2.next = new LinkedListNode(0);
    list2.next.next = new LinkedListNode(1);

    intersecting = new LinkedListNode(8);
    intersecting.next = new LinkedListNode(4);
    intersecting.next.next = new LinkedListNode(5);

    list1.next.next = intersecting;
    list2.next.next.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(0);
    list1.next = new LinkedListNode(9);
    list1.next.next = new LinkedListNode(1);

    list2 = new LinkedListNode(3);

    intersecting = new LinkedListNode(2);
    intersecting.next = new LinkedListNode(4);

    list1.next.next.next = intersecting;
    list2.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(2);
    list1.next = new LinkedListNode(6);
    list1.next.next = new LinkedListNode(4);

    list2 = new LinkedListNode(1);
    list2.next = new LinkedListNode(5);

    expect(findIntersection(list1, list2)).toBeNull();

    list1 = new LinkedListNode(1);
    list2 = null;
    expect(findIntersection(list1, list2)).toBeNull();
  });
});
