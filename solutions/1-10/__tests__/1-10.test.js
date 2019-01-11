import TwoSum from '../Problem1';
import ProductExceptSelf from '../Problem2';
import { TreeNode, serialize, deserialize } from '../Problem3';
import FirstMissingPositiveInteger from '../Problem4';
import { cons, car, cdr } from '../Problem5';
import NumDecodings from '../Problem7';

test('Problem 1 Two Sum', () => {
  expect(TwoSum([2, 7, 11, 15], 9)).toBe(true);
  expect(TwoSum([], 19)).toBe(false);
  expect(TwoSum([2, 11, 99, 15], 26)).toBe(true);
  expect(TwoSum([2, 11, 99, 16], 26)).toBe(false);
});

test('Problem 2 Product', () => {
  expect(ProductExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(ProductExceptSelf([3, 2, 1])).toEqual([2, 3, 6]);
  expect(ProductExceptSelf([1])).toEqual([1]);
  expect(ProductExceptSelf([])).toEqual([]);
});

test('Problem 3 Serialize And Deserialize Binary Tree', () => {
  expect(deserialize(serialize(null))).toBe(null);

  const node = new TreeNode(
    'root',
    new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
  );

  expect(deserialize(serialize(node))).toEqual(node);
  expect(deserialize(serialize(node)).left.left.val).toEqual('left.left');
});

test('Problem 4 First Missing Positive Integer', () => {
  expect(FirstMissingPositiveInteger([3, 4, -1, 1])).toBe(2);
  expect(FirstMissingPositiveInteger([1, 2, 0])).toBe(3);
  expect(FirstMissingPositiveInteger([0, 6, -1, 5, 4])).toBe(1);
  expect(FirstMissingPositiveInteger([1, 2, 3, 4])).toBe(5);
  expect(FirstMissingPositiveInteger([1, 2, 4, 5])).toBe(3);
  expect(FirstMissingPositiveInteger([-1, -2, -4, -5])).toBe(1);
  expect(FirstMissingPositiveInteger([7, 8, 9, 11, 12])).toBe(1);
});

test('Problem 5 Pairs', () => {
  expect(car(cons(3, 4))).toBe(3);
  expect(cdr(cons(3, 4))).toBe(4);
});

test('Problem 7 Decode Message', () => {
  expect(NumDecodings('111')).toBe(3);
  expect(NumDecodings('12')).toBe(2);
  expect(NumDecodings('8')).toBe(1);
  expect(NumDecodings('26')).toBe(2);
  expect(NumDecodings('27')).toBe(1);
  expect(NumDecodings('226')).toBe(3);
  expect(NumDecodings('10')).toBe(1);
  expect(NumDecodings('11')).toBe(2);
  expect(NumDecodings('34')).toBe(1);
  expect(NumDecodings('0')).toBe(0);
  expect(NumDecodings('1')).toBe(1);
});
