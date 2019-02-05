import Heap from '../Data-Structures/Heap';

describe('Data Structures Test', () => {
  test('Min and Max Heap', () => {
    const minHeap = new Heap();
    minHeap.add(5);
    expect(minHeap.peek()).toBe(5);

    minHeap.add(9);
    expect(minHeap.peek()).toBe(5);

    minHeap.add(10);
    minHeap.add(3);
    expect(minHeap.peek()).toBe(3);

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.peek()).toBe(5);

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.peek()).toBe(9);

    expect(minHeap.poll()).toBe(9);
    expect(minHeap.peek()).toBe(10);

    expect(minHeap.poll()).toBe(10);

    expect(minHeap.size()).toBe(0);

    expect(() => {
      minHeap.poll();
    }).toThrowError('No more items in heap');

    expect(() => {
      minHeap.peek();
    }).toThrowError('No more items in heap');

    const maxHeap = new Heap((x, y) => x - y);
    maxHeap.add(1);
    expect(maxHeap.peek()).toBe(1);

    maxHeap.add(5);
    expect(maxHeap.peek()).toBe(5);

    maxHeap.add(3);
    expect(maxHeap.peek()).toBe(5);

    maxHeap.add(10);
    expect(maxHeap.peek()).toBe(10);

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.peek()).toBe(5);

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.peek()).toBe(3);

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.peek()).toBe(1);

    expect(maxHeap.poll()).toBe(1);
    expect(maxHeap.size()).toBe(0);

    expect(() => {
      maxHeap.poll();
    }).toThrowError('No more items in heap');

    expect(() => {
      maxHeap.peek();
    }).toThrowError('No more items in heap');
  });
});
