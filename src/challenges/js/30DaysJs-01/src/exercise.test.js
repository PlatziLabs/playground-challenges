import { calculateTip } from "./exercise";

describe("tests", () => {
  it("should return 10", () => {
    const billAmount = 100;
    const tipPercentage = 10;
    const rta = calculateTip(billAmount, tipPercentage);
    expect(rta).toEqual(10);
  });
  
  it("should return 381.0825", () => {
    const billAmount = 1524.33;
    const tipPercentage = 25;
    const rta = calculateTip(billAmount, tipPercentage);
    expect(rta).toEqual(381.0825);
  });

  it("should return 0", () => {
    const billAmount = 0;
    const tipPercentage = 0;
    const rta = calculateTip(billAmount, tipPercentage);
    expect(rta).toEqual(0);
  });
  
});
