export class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

export function reorderList(cabeza) {
  if (!cabeza?.siguiente?.siguiente) {
    return cabeza;
  }
  
  let p1 = cabeza;
  let p2 = reversarLista(encontrarMitad(clon(cabeza)));

  while (p2) {
    if (p1.valor == p2.valor) {
      p1.siguiente = null;
      p2 = null;
    } else {
      let tmp = p1.siguiente;
      p1.siguiente = p2;
      p1 = p2;
      p2 = tmp;
    }
  }

  return cabeza;
}

function encontrarMitad(cabeza) {
  let rapido = cabeza;
  let lento = cabeza;

  while(rapido && rapido.siguiente) {
    lento = lento.siguiente;
    rapido = rapido.siguiente.siguiente;
  }

  return lento;
}

function reversarLista(cabeza) {
  let anterior = null;
  let actual = cabeza;

  while (actual) {
    let siguienteTemporal = actual.siguiente;
    actual.siguiente = anterior;
    anterior = actual;
    actual = siguienteTemporal;
  }

  return anterior;
}

function clon(obj) {
  return JSON.parse(JSON.stringify(obj));
}
