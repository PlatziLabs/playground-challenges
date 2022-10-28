import { parseToURL } from "./exercise";

describe("tests", () => {
  it("should return right title", () => {
    expect(parseToURL("La API para nunca parar de aprender")).toEqual(
      "la-api-para-nunca-parar-de-aprender"
    );
    expect(parseToURL("La forma de correr Python")).toEqual(
      "la-forma-de-correr-python"
    );
    expect(parseToURL("Curso de arrays")).toEqual(
      "curso-de-arrays"
    );
  });
});
