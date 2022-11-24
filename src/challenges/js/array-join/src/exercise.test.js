import { joinString } from "./exercise";

describe("tests", () => {
  it("should to join array", () => {
    const array = ["amor", "sol", "piedra", "día"]
    const rta = joinString(array);
    expect(rta).toEqual('amor,sol,piedra,día');
  });

  it("should to join array", () => {
    const array = ["a", "b", "c", "d"];
    const rta = joinString(array);
    expect(rta).toEqual('a,b,c,d');
  });

  it("should return []", () => {
    const array = [];
    const rta = joinString(array);
    expect(rta).toEqual('');
  });
});
