import { searchInRotatedArray } from "./exercise";

describe("tests", () => {
  it("should return -1 (rotated)", () => {
    const arrayA = [4,5,6,7,0,1,2];
    const objetivoA = 3;
    const rta = searchInRotatedArray(arrayA, objetivoA);
    expect(rta).toEqual(-1);
  });

  it("should return 3 (rotated)", () => {
    const arrayB = [12,13,9,10,11];
    const objetivoB = 10;
    const rta = searchInRotatedArray(arrayB, objetivoB);
    expect(rta).toEqual(3);
  });

  it("should return 4 (rotated)", () => {
    const arrayB = [38,45,89,111,11];
    const objetivoB = 11;
    const rta = searchInRotatedArray(arrayB, objetivoB);
    expect(rta).toEqual(4);
  });

  it("should return 2 (no rotated)", () => {
    const arrayC = [1,2,3,4,5,6,7,8];
    const objetivoC = 3;
    const rta = searchInRotatedArray(arrayC, objetivoC);
    expect(rta).toEqual(2);
  });
});
