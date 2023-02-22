import { protectDog } from "./exercise";

const dog = {
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
};

describe("tests", () => {
  it("should freeze all nested objects related to the dog", () => {
    const protectedDog = protectDog(dog);
    expect(Object.isFrozen(protectedDog.owner)).toBe(true);
    expect(Object.isFrozen(protectedDog.favoriteFood)).toBe(true);
    expect(Object.isFrozen(protectedDog.activities)).toBe(true);
  });

  it("should not allow changes to the protected dog properties", () => {
    const protectedDog = protectDog(dog);
    expect(() => (protectedDog.name = "Toro")).toThrow(TypeError);
    expect(() => (protectedDog.owner.name = "Pedro")).toThrow(TypeError);
    expect(() => protectedDog.favoriteFood.push("vegetales")).toThrow(
      TypeError
    );
    expect(() => protectedDog.activities.push("ver tiktoks")).toThrow(
      TypeError
    );
  });

  it("should not allow changes to the nested properties of the dog", () => {
    const protectedDog = protectDog(dog);
    expect(() => (protectedDog.owner.phoneNumber = "123-45-1232")).toThrow(
      TypeError
    );
  });

  it("should return an object that is a copy of the original dog", () => {
    const protectedDog = protectDog(dog);
    expect(protectedDog).not.toBe(dog);
    expect(protectedDog).toEqual(dog);
  });

  it("should allow changes in the original object", () => {
    dog.name = "firulais";
    expect(dog.name).toEqual("firulais");
  });
});
