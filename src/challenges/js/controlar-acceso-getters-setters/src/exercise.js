export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
      nuevoNombrecito = nuevoNombrecito.trim()
      if (nuevoNombrecito.length !== 0) {
        let words = nuevoNombrecito.split(" ")
        let nuevoNombrecitoMayusculas = words.map((word) => {
          return word[0]?.toUpperCase() + word.substring(1);
        }).join(" ")
        this._name = nuevoNombrecitoMayusculas
      }
    }
  }
}