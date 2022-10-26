import { solution } from "./exercise";

describe("tests", () => {
  it("should return message with computadora", () => {
    const article = "computadora";
    const rta = solution(article);
    expect(rta).toEqual("Con mi computadora puedo programar usando JavaScript");
  });
  it("should return message with celular", () => {
    const article = "celular";
    const rta = solution(article);
    expect(rta).toEqual("En mi celular puedo aprender usando la app de Platzi");
  });
  it("should return message with cable", () => {
    const article = "cable";
    const rta = solution(article);
    expect(rta).toEqual("¡Hay un cable en mi bota!");
  });
  it("should return default message", () => {
    const article = "bebé";
    const rta = solution(article);
    expect(rta).toEqual("Artículo no encontrado");
  });
});
