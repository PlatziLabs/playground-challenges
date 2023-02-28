import { orangesRotting } from "./exercise";

describe("tests", () => {
  it("should return 4", () => {
    const cultivo = [
      [2,1,1],
      [1,1,0],
      [0,1,1],
    ];
    const rta = orangesRotting(cultivo);
    expect(rta).toEqual(4);
  });

  it("should return 0", () => {
    const cultivo = [
      [2,2,2],
      [0,0,0],
      [0,2,2],
    ];
    const rta = orangesRotting(cultivo);
    expect(rta).toEqual(0);
  });

  it("should return -1", () => {
    const cultivo = [
      [2,1,0],
      [1,0,0],
      [1,0,1],
    ];
    const rta = orangesRotting(cultivo);
    expect(rta).toEqual(-1);
  });
});
