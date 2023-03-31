import { MyArray } from "./exercise";

describe("tests", () => {
  let myArray;

  beforeEach(() => {
    myArray = new MyArray();
    myArray.push(1);
    myArray.push(2);
    myArray.push(3);
  });

  it("should work the map method", () => {
    const newArray = myArray.map((element) => element * 2);
    expect(newArray.data).toEqual({ 0: 2, 1: 4, 2: 6 });
    expect(newArray.length).toBe(3);
  });

  it("should work the filter method", () => {
    const newArray = myArray.filter((element) => element % 2 === 0);
    expect(newArray.data).toEqual({ 0: 2 });
    expect(newArray.length).toBe(1);
  });

  it("should work the push method", () => {
    myArray.push(4);
    expect(myArray.data).toEqual({ 0: 1, 1: 2, 2: 3, 3: 4 });
    expect(myArray.length).toBe(4);
  });

  it("should work the pop method", () => {
    const poppedItem = myArray.pop();
    expect(poppedItem).toBe(3);
    expect(myArray.data).toEqual({ 0: 1, 1: 2 });
    expect(myArray.length).toBe(2);
  });

  it("should work the join method with default character", () => {
    const joinedString = myArray.join();
    expect(joinedString).toBe("1,2,3");
  });

  it("should work the join method with custom character", () => {
    const joinedString = myArray.join("|");
    expect(joinedString).toBe("1|2|3");
  });

  it("should work the shift method", () => {
    const shiftedItem = myArray.shift();
    expect(shiftedItem).toBe(1);
    expect(myArray.data).toEqual({ 0: 2, 1: 3 });
    expect(myArray.length).toBe(2);
  });

  it("should returns the new length of the array (unshift)", () => {
    const result = myArray.unshift(0);

    expect(result).toBe(4);
    expect(myArray.length).toBe(4);
  });

  it("should not add an item if no item is provided (unshift)", () => {
    myArray.unshift();

    expect(myArray.length).toBe(3);
  });
});
