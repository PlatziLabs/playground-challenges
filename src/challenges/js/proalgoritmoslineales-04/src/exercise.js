export class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

export function reorderList(cabeza) {
  // Tu código aquí 👇
  return cabeza;
}

function clon(obj) {
  return JSON.parse(JSON.stringify(obj));
}
