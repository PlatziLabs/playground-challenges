import { LinkedListRecharged } from "./exercise";

describe("tests", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedListRecharged();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
  });

  it("get(index) should return the element at the given index", () => {
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(3);
  });

  it("get(index) should return null if index is out of bounds", () => {
    expect(linkedList.get(-1)).toBeNull();
    expect(linkedList.get(3)).toBeNull();
  });

  it("insertAt(index, value) should insert the given value at the given index", () => {
    linkedList.insertAt(1, 5);
    expect(linkedList.toArray()).toEqual([1, 5, 2, 3]);
  });

  it("insertAt(index, value) should return null if index is out of bounds", () => {
    expect(linkedList.insertAt(-1, 5)).toBeNull();
    expect(linkedList.insertAt(3, 5)).toBeNull();
  });

  it("toArray() should return an array representation of the linked list", () => {
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  it("removeAt(index) should remove the element at the given index", () => {
    linkedList.removeAt(1);
    expect(linkedList.toArray()).toEqual([1, 3]);
  });

  it("removeAt(index) should return null if index is out of bounds", () => {
    expect(linkedList.removeAt(-1)).toBeNull();
    expect(linkedList.removeAt(3)).toBeNull();
  });
});
