import { printTriangle } from "./exercise";

describe("tests", () => {
  it("should return a triangle of *", () => {
    const size = 5;
    const character = "*";
    const rta = printTriangle(size, character);
    expect(rta).toEqual("    *\n   **\n  ***\n ****\n*****");
  });
  
  it("should return a triangle of size 6 with $", () => {
    const size = 6;
    const character = "$";
    const rta = printTriangle(size, character);
    expect(rta).toBe("     $\n    $$\n   $$$\n  $$$$\n $$$$$\n$$$$$$")
  })

  it("should return a triangle of size 3 with %", () => {
    const size = 3;
    const character = "%";
    const rta = printTriangle(size, character);
    expect(rta).toBe("  %\n %%\n%%%")
  })

});
