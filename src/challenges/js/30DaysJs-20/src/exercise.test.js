import { arrayModified } from "./exercise";

arrayModified();

describe("tests", () => {
  it("should exist a new array method", () => {
    const type = typeof Array.prototype.myFilter;
    expect(type).toEqual("function");
  });

  it("should return [2,4,6]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const rta = arr.myFilter((num) => num % 2 === 0);
    expect(rta).toEqual([2, 4, 6]);
  });

  it("should work with objects", () => {
    const arr = [
      {
        name: "Juan",
        age: 10,
      },
      {
        name: "Pedro",
        age: 20,
      },
      {
        name: "Maria",
        age: 30,
      },
    ];
    const rta = arr.myFilter((person) => person.age > 18);
    expect(rta).toEqual([
      {
        name: "Pedro",
        age: 20,
      },
      {
        name: "Maria",
        age: 30,
      },
    ]);
  });

  it("should work with arrays in objects", () => {
    const arr = [
      {
        name: "Juan",
        age: 10,
        hobbits: ["read", "eat", "play"],
      },
      {
        name: "Pedro",
        age: 20,
        hobbits: ["sports", "sleep", "play"],
      },
      {
        name: "Maria",
        age: 30,
        hobbits: ["read", "study", "drive"],
      },
    ];
    const rta = arr.myFilter((person) => person.hobbits.includes("read"));
    expect(rta).toEqual([
      {
        name: "Juan",
        age: 10,
        hobbits: ["read", "eat", "play"],
      },
      {
        name: "Maria",
        age: 30,
        hobbits: ["read", "study", "drive"],
      },
    ]);
  });
  it("should not use array methods", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const filterSpy = jest.spyOn(Array.prototype, 'filter');
    const rta = arr.myFilter((num) => num % 2 === 0);
    expect(filterSpy).not.toHaveBeenCalled();
  });
});
