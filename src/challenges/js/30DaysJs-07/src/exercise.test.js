import { findLargestPalindrome } from "./exercise";

describe("tests", () => {
  it("should return racecar", () => {
    const words = ["racecar", "level", "world", "hello"];
    const rta = findLargestPalindrome(words);
    expect(rta).toEqual("racecar");
  });

  it("should return null", () => {
    const words = ["Platzi", "javascript", "html", "css"];
    const rta = findLargestPalindrome(words);
    expect(rta).toEqual(null);
  });

  it("should return madam", () => {
    const words = ["wow", "now", "madam", "civic"];
    const rta = findLargestPalindrome(words);
    expect(rta).toEqual("madam");
  });

  it("should return repaper", () => {
    const words = ["asdfsrtetrew", "level", "noon", "repaper"];
    const rta = findLargestPalindrome(words);
    expect(rta).toEqual("repaper");
  });
});
