import { runCode } from './exercise';

async function solution(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results.map((item) => item.name)
}

describe("tests", () => {
  it("should return and array with the names", async () => {
    const names = await solution('https://rickandmortyapi.com/api/character');
    const rta = await runCode();
    expect(rta).toEqual(names);
  });
})


