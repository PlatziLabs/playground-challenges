import { BetterArray } from "./exercise";

describe("tests", () => {
  it("should return a string", () => {
    const myArray = new BetterArray();
    myArray.unshift("Suerte")
    myArray.unshift("Con el")
    myArray.unshift("desafio")
    myArray.unshift("platzinauta")
    myArray.unshift("Un 🐱 random en el desafío")
    
    const rta = myArray.shift()
    expect(rta).toEqual("Un 🐱 random en el desafío");
  });

  it("should return a length of 4", () => {
    const myArray = new BetterArray();
    myArray.unshift("Suerte")
    myArray.unshift("Con el")
    myArray.unshift("desafio")
    myArray.unshift("platzinauta")
    myArray.unshift("Un 🐱 random en el desafío")
    
    myArray.shift()

    const rta = myArray.length
    expect(rta).toEqual(4);
  });

  it("should return a length of 0", () => {
    const myArray = new BetterArray();
    myArray.unshift("item")
    myArray.shift()
    const rta = myArray.length
    expect(rta).toEqual(0);
  });

  it("should return a string", () => {
    const myArray = new BetterArray();
    myArray.unshift("item")
    const rta = myArray.shift()
    expect(rta).toEqual("item");
  });
  
  it("should return an object", () => {
    const myArray = new BetterArray();
    myArray.unshift("item")
    myArray.unshift("item 2")
    myArray.unshift("item 3")

    myArray.shift()

    const rta = myArray.data
    expect(rta).toEqual({0: "item 2", 1: "item"});
  });

  it("should return undefined", () => {
    const myArray = new BetterArray();
    const rta = myArray.shift()
    expect(rta).toEqual(undefined);
  });
});
