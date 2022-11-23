import { checkInString } from "./exercise";

describe("tests", () => {
  it("should return true when the term is found", () => {
    const text = "Ana lava la tina";
    const term = "ana";
    const rta = checkInString(text, term);
    expect(rta).toEqual(true);
  });

  it("should return true when the term is not found", () => {
    const text = "Ana lava la tina";
    const term = "nico";
    const rta = checkInString(text, term);
    expect(rta).toEqual(false);
  });
});
