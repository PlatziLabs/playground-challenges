import { Solution } from "./exercise";
const hashTable = new Solution(50)
hashTable.set("Diego", 1990)
hashTable.set("Mariana", 1998)
hashTable.set("Miranda", 2000)
hashTable.set("Cat", 2010)
const rta = hashTable.getAllKeys();

describe("tests", () => {
  it("should return an array", () => {
    expect(rta).toBeInstanceOf(Array);
  });

  it("should return an array with 4 elements", () => {
    expect(rta.length).toEqual(4);
  });
  
  it("should return an array with 4 strings", () => {
    expect(rta).toEqual([
      "Diego",
      "Mariana",
      "Cat",
      "Miranda"
    ]);
  });

  it("should return an empty array", () => {
    const empty = new Solution(50)
    const emptyRta = empty.getAllKeys()
    expect(emptyRta).toEqual([]);
  });
});
