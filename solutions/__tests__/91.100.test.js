import courseOrder from '../91-100/Problem92';

describe('Problems 91 - 100', () => {
  test('Problem 92 Course Ordering', () => {
    const kv = [
      ['CSC300', new Set(['CSC100', 'CSC200'])],
      ['CSC200', new Set(['CSC100'])],
      ['CSC100', new Set()]
    ];

    const map = new Map(kv);
    expect(courseOrder(map)).toEqual(['CSC100', 'CSC200', 'CSC300']);
  });
});
