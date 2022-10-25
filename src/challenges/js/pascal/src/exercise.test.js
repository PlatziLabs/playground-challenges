import { pascalTriangle } from "./exercise";

describe('pascalTriangle', () => {
  it('Debe calcular los coeficientes del triángulo de Pascal para un número de línea específico', () => {
    expect(pascalTriangle(0)).toEqual([1]);
    expect(pascalTriangle(1)).toEqual([1, 1]);
    expect(pascalTriangle(2)).toEqual([1, 2, 1]);
    expect(pascalTriangle(3)).toEqual([1, 3, 3, 1]);
    expect(pascalTriangle(4)).toEqual([1, 4, 6, 4, 1]);
    expect(pascalTriangle(5)).toEqual([1, 5, 10, 10, 5, 1]);
    expect(pascalTriangle(6)).toEqual([1, 6, 15, 20, 15, 6, 1]);
    expect(pascalTriangle(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });
});