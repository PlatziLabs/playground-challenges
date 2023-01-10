import { findFamousCats } from "./exercise";

describe("tests", () => {
  it('should return ["Luna"]', () => {
    const cats = [
      {
        name: "Luna",
        followers: [500, 200, 300],
      },
      {
        name: "Michi",
        followers: [100, 300],
      },
    ];
    const rta = findFamousCats(cats);
    expect(rta).toEqual(["Luna"]);
  });

  it('Should return ["Milo", "Gizmo"]', () => {
    const cats = [
      {
        name: "Mimi",
        followers: [320, 120, 70],
      },
      {
        name: "Milo",
        followers: [400, 300, 100, 200],
      },
      {
        name: "Gizmo",
        followers: [250, 750],
      },
    ];

    const rta = findFamousCats(cats);
    expect(rta).toEqual(["Milo", "Gizmo"]);
  });

  it('Should return ["Luna", "Michi", "Simba"]', () => {
    const cats = [
      {
        name: "Luna",
        followers: [0],
      },
      {
        name: "Michi",
        followers: [0],
      },
      {
        name: "Simba",
        followers: [0],
      },
    ];

    const rta = findFamousCats(cats);
    expect(rta).toEqual(["Luna", "Michi", "Simba"]);
  });

  it('Should return ["Mimi"]', () => {
    const cats = [
      {
        name: "Mimi",
        followers: [1000000],
      },
      {
        name: "Michi",
        followers: [250, 2500, 30000],
      },
      {
        name: "Simba",
        followers: [50, 20, 213],
      },
    ];

    const rta = findFamousCats(cats);
    expect(rta).toEqual(["Mimi"]);
  });
});
