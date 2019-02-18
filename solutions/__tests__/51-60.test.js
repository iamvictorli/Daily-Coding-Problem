import LRUCache from '../51-60/Problem52';
import Queue from '../51-60/Problem53';

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
});
