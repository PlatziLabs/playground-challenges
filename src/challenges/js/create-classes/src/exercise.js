class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integrante) {
    if (
      integrante.instrumento.toLowerCase() === "bateria" &&
      this.integrantes.some(
        (integrante) => integrante.instrumento.toLowerCase() === "bateria"
      )
    ) {
      return false;
    }

    return this.integrantes.push(integrante);
  }
}

//Crear clase Integrante
class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

export { Banda, Integrante };