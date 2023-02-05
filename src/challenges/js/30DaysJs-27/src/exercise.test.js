import { Chat } from "./exercise";

describe("tests", () => {
  it("should return [1,2,3,4]", () => {
    const chat1 = new Chat();
    const chat2 = new Chat();
    expect(chat1 === chat2).toBe(true);
  });

  // it("should return [1,2,3,4,5]", () => {
  //   const arrayA = [1, 2];
  //   const arrayB = [3, 4, 5];
  //   const rta = mergeArrays(arrayA, arrayB);
  //   expect(rta).toEqual([1, 2, 3, 4, 5]);
  // });
});
