import { MyArray } from "./exercise";

describe("tests", () => {
  it("should return {0: 'Hola', 1: 'Platzinauta'}", () => {
    const myArray = new MyArray();
    myArray.unshift("Platzinauta")
    myArray.unshift("Hola")
    const rta = myArray.data;
    expect(rta).toEqual({0: 'Hola', 1: 'Platzinauta'});
  });

  it("should return {0: 'Amazing'}", () => {
    const myArray = new MyArray();
    myArray.unshift("Amazing")
    const rta = myArray.data;
    expect(rta).toEqual({0: 'Amazing'});
  });

  it("should return 'Lo Lograste Platzinauta !!!' as an object", () => {
    const myArray = new MyArray();
    myArray.unshift("!!!")
    myArray.unshift("Platzinauta")
    myArray.unshift("Lograste")
    myArray.unshift("Lo")
    const rta = myArray.data;
    expect(rta).toEqual({ 0: "Lo", 1: "Lograste", 2: "Platzinauta", 3: "!!!" });
  });

  it("should return 0", () => {
    const myArray = new MyArray();
    const rta = myArray.unshift();
    expect(rta).toEqual(0);
  });

  it("should return 5", () => {
    const myArray = new MyArray();
    myArray.unshift("this")
    myArray.unshift("is")
    myArray.unshift("a")
    myArray.unshift("length")
    myArray.unshift("test")
    const rta = myArray.unshift();
    expect(rta).toEqual(5);
  });
});
