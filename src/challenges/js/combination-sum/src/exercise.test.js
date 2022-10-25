import { combinationSum } from "./exercise";

describe('combinationSum', () => {
  it('Debería encontrar todas las combinaciones con suma específica', () => {
    expect(combinationSum([1], 4)).toEqual([
      [1, 1, 1, 1],
    ]);

    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([
      [2, 2, 3],
      [7],
    ]);

    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);

    expect(combinationSum([2, 5], 3)).toEqual([]);

    expect(combinationSum([], 3)).toEqual([]);
  });
});