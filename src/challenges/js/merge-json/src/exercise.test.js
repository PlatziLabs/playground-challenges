import { solution } from "./exercise";

describe("tests", () => {

  it("should return JSON objects merged", () => {
    const json1 = {
      name: "Fluffy",
      food: "Pollito"
    };
    const json2 = {
      age: 6,
      color: "Gris"
    };
    const rta = solution(json1, json2);
    expect(rta).toEqual({
      name: "Fluffy",
      food: "Pollito",
      age: 6,
      color: "Gris"
    });
  });

  it("should return JSON object merged with default JSON 2", () => {
    const json1 = {
      name: "Sissy",
      food: "Atun"
    };
    const rta = solution(json1);
    expect(rta).toEqual({
      name: "Sissy",
      food: "Atun",
      age: 12,
      color: "Blanco"
    });
  });

  it("should return JSON object merged with default JSON 1", () => {
    const json2 = {
      age: 4,
      color: "Naranja"
    }
    const rta = solution(undefined, json2);
    expect(rta).toEqual({
      name: "Mr. Michi",
      food: "Pescado",
      age: 4,
      color: "Naranja"
    });
  });

  it("should return default JSON objects merged", () => {
    const rta = solution();
    expect(rta).toEqual({
      name: "Mr. Michi",
      food: "Pescado",
      age: 12,
      color: "Blanco"
    });
  });
});
