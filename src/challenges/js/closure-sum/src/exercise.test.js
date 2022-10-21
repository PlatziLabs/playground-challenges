import { sumWithClosure } from "./exercise";

describe("tests", () => {
  it("should return 5", () => {
    const firstNum = 2;
    const secondNum = 3;
    const rta = sumWithClosure(firstNum)(secondNum);
    expect(rta).toEqual(5);
  });

  it("should return 113", () => {
    const firstNum = 35;
    const secondNum = 78;
    const rta = sumWithClosure(firstNum)(secondNum);
    expect(rta).toEqual(113);
  });

  it("should return 3245", () => {
    const firstNum = 0;
    const secondNum = 3245;
    const rta = sumWithClosure(firstNum)(secondNum);
    expect(rta).toEqual(3245);
  });

  it("should return 20", () => {
    const firstNum = 20;
    const rta = sumWithClosure(firstNum)();
    expect(rta).toEqual(20);
  });

  it("should return -80", () => {
    const firstNum = -48;
    const secondNum = -32
    const rta = sumWithClosure(firstNum)(secondNum);
    expect(rta).toEqual(-80);
  });
});
