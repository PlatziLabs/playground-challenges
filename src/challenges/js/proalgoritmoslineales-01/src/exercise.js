export function oddEvenList(cabeza) {
  if (!cabeza || !cabeza.siguiente) {
    return cabeza;
  }

  let impar = cabeza;
  let par = cabeza.siguiente;
  let cabezaPar = par;

  while (par && par.siguiente) {
      impar.siguiente = par.siguiente;
      impar = impar.siguiente;
      par.siguiente = impar.siguiente;
      par = par.siguiente;
  }

  impar.siguiente = cabezaPar;
  return cabeza;
}

export class Nodo {
  constructor(id) {
    this.id = id;
    this.siguiente = null;
  }
}
