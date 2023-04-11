import { removeDuplicates } from "./exercise";

describe("tests", () => {
  it("should remove duplicates numbers from an array", () => {
    const input = [1, 2, 3, 1, 2, 3];
    const expectedOutput = [1, 2, 3];

    const rta = removeDuplicates(input);

    expect(rta).toEqual(expectedOutput);
  });

  it("should remove duplicates string from an array", () => {
    const input = [
      "melon",
      "melon",
      "mango",
      "banana",
      "apple",
      "banana",
      "apple",
    ];
    const expectedOutput = ["melon", "mango", "banana", "apple"];

    const rta = removeDuplicates(input);

    expect(rta).toEqual(expectedOutput);
  });

  it("Should return an empty array", () => {
    const input = [
      "melon",
      "melon",
      "mango",
      "banana",
      "apple",
      "banana",
      "apple",
    ];

    const rta = removeDuplicates(input);

    expect(Array.isArray(rta)).toEqual(true);
  });

  it("Should return an array", () => {
    const input = [];
    const expectedOutput = [];

    const rta = removeDuplicates(input);

    expect(rta).toEqual(expectedOutput);
  });

  it("Should return an empty with one item", () => {
    const input = [1];
    const expectedOutput = [1];

    const rta = removeDuplicates(input);

    expect(rta).toEqual(expectedOutput);
  });
});
