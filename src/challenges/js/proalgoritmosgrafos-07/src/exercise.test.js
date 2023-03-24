import { restoreIpAddresses } from "./exercise";

describe("tests", () => {
  it("should return 2 addresses", () => {
    const s = "25525511135";
    const rta = restoreIpAddresses(s);
    const expected = (
      rta.find(x => x == "255.255.111.35")
      && rta.find(x => x == "255.255.111.35")
      && rta.length == 2
    );
    expect(expected).toEqual(true);
  });

  it("should return 2 addresses (but without 0)", () => {
    const s = "19216801";
    const rta = restoreIpAddresses(s);
    const expected = (
      rta.find(x => x == "19.216.80.1")
      && rta.find(x => x == "192.16.80.1")
      && rta.length == 2
    );
    expect(expected).toEqual(true);
  });

  it("should return empty array", () => {
    const s = "01921681";
    const rta = restoreIpAddresses(s);
    expect(rta.length).toEqual(0);
  });
});
