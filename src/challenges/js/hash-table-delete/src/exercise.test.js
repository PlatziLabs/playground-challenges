import { Solution } from "./exercise";

describe("tests", () => {
  it("should be an instance of Solution", () => {
    const hashTable = new Solution(50)
    expect(hashTable).toBeInstanceOf(Solution)
  });
  
  it("should return an array with key and value", () => {
    const hashTable = new Solution(50)
    hashTable.set("solution", "✔")
    const rta = hashTable.delete("solution")
    expect(rta).toEqual(['solution','✔'])
  })

  it("should remove key and value", () => {
    const hashTable = new Solution(50)
    hashTable.set("Diego", 1990)
    hashTable.set("Mariana", 1998)
    hashTable.set("Adriana", 2000)
    hashTable.delete("Diego")
    const rta = hashTable.get("Mariana")[0][0]
    expect(rta).toBe("Mariana")
  })
});
