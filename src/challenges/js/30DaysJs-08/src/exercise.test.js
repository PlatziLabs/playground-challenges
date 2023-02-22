import { createCalculator } from "./exercise";

describe("tests", () => {
  const calculator = createCalculator();

  it("should return 10 after sum", () => {
    const rta = calculator.add(10);
    expect(rta).toEqual(10);
  });

  it("should return 120 using more operations", () => {
    calculator.multiply(20);
    const rta = calculator.subtract(80);
    expect(rta).toEqual(120);
  });

  it("should return 10 after subtract", () => {
    const newCalc = createCalculator();
    const rta = newCalc.subtract(-10);
    expect(rta).toEqual(10);
  });

  it("should return the total", () => {
    const rta = calculator.getTotal();
    expect(rta).toEqual(120);
  });

  it("should return 0", () => {
    const rta = calculator.clear();
    expect(rta).toEqual(0);
  });
});
