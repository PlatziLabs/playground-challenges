import { Animal, Mammal, Dog } from "./exercise";

describe("tests", () => {
  it("should return a correct object from Animal", () => {
    const bird = new Animal("pepe", 1, "bird");
    const rta = bird.getInfo();
    expect(rta).toEqual({
      name: "pepe",
      age: 1,
      specie: "bird",
    });
  });

  it("should return a correct object from Mammal", () => {
    const hippo = new Mammal("bartolo", 3, "hippo", false);
    const rta = hippo.getInfo();
    expect(rta).toEqual({
      name: "bartolo",
      age: 3,
      specie: "hippo",
      hasFur: false,
    });
  });

  it("should return a correct object from dog", () => {
    const dog = new Dog("fido", 4, "pastor aleman", true);
    const rta = dog.getInfo();
    expect(rta).toEqual({
      name: "fido",
      age: 4,
      specie: "dog",
      hasFur: true,
      breed: "pastor aleman",
    });
  });

  it("Mammals should extends from Animal", () => {
    const mammal = new Mammal("test", 1, "test", false);
    const rta = mammal instanceof Animal;
    expect(rta).toBe(true);
  });

  it("dog should extends from Mammals", () => {
    const dog = new Dog("Firulais", 3, "pitbull", true);
    const rta = dog instanceof Mammal;
    expect(rta).toBe(true);
  });

  it("dogs should bark", () => {
    const dog = new Dog("Firulais", 3, "pitbull", true);
    const rta = dog.bark();
    expect(rta).toEqual("woof!");
  });
});
