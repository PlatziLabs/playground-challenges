class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    let instrumento = integranteNuevo.instrumento.toLowerCase().trim()

    function tenemosUnBateria(integrantes) {
      return integrantes.some((element) => {
        return element.instrumento.toLowerCase().trim() === "bateria"
      });
    }

    if (instrumento === "bateria" && tenemosUnBateria(this.integrantes)) {
      return false;
    }

    return this.integrantes.push(integranteNuevo);
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
