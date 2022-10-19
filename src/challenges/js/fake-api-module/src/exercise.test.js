import { solution } from "./exercise";

describe("tests", () => {

  it("should return a list of movies", async () => {

    const rta = await solution();

    expect(rta).toEqual([{
      movie: "El despertar de los michis",
      year: 2021,
      protagonist: "Mr. Michi"
    }, {
      movie: "101 Michis",
      year: 2019,
      protagonist: "Tommy Michiguire"
    }]);

  });

});
