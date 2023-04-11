import { wordExist } from "./exercise";

describe("tests", () => {
  it("should return true", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCEC";
    const rta = wordExist(board, word);
    expect(rta).toEqual(false);
  });

  it("should return true", () => {
    const board = [
      ["A", "M", "B", "E"],
      ["M", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "AMA";
    const rta = wordExist(board, word);
    expect(rta).toEqual(true);
  });
});
