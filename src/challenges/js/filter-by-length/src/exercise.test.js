import { filterByLength } from "./exercise";

describe("tests", () => {
  it("should return ['amor', 'piedra']", () => {
    const array = ['amor', 'sol', 'piedra', 'día'];
    const rta = filterByLength(array);
    expect(rta).toEqual([ 'amor', 'piedra' ]);
  });

  it("should return a right array", () => {
    const array = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'];
    const rta = filterByLength(array);
    expect(rta).toEqual([ 'aaaa', 'aaaaa' ]);
  });

  it("should return a empty array", () => {
    const array = [];
    const rta = filterByLength(array);
    expect(rta).toEqual([]);
  });
});
