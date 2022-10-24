import { Banda, Integrante, } from "./exercise";


describe("tests", () => {
  let banda;
  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  beforeEach(() => {
    banda = new Banda(data)
  });

  it("Debe inicializar con los datos pasados como parametros", () => {
    expect(banda).toEqual(data);
  });

  it("Debe ser un instancia de la clase Banda", () => {
    expect(banda).toBeInstanceOf(Banda)
  });

  it("Debe ser un instancia de la clase Integrante", () => {
    expect(new Integrante({})).toBeInstanceOf(Integrante)
  });

  it("Debe agregar nuevos integrantes", () => {
    banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
    expect(banda.integrantes).toEqual([{ nombre: "Erik", instrumento: "Guitarra" }]);
  });

  it("No debe dejar agregar más de un baterista", () => {
    banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
    let segundoBaterista = banda.agregarIntegrante(new Integrante({ nombre: "Roger", instrumento: "Bateria" }))
    expect(banda.integrantes).toEqual([{ nombre: "Paul", instrumento: "Bateria" }]);
    expect(segundoBaterista).toBeFalsy();
  });
});