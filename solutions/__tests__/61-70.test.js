import pow from '../61-70/Problem61';

describe('Problems 61 - 70', () => {
  test('Problem 61 ', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(Number(pow(2.1, 3).toFixed(4))).toBe(9.261);
    expect(pow(2, -2)).toBe(0.25);
  });
});
