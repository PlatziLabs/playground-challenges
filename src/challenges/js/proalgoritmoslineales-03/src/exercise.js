export class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

export function isPalindrome(cabeza) {
  if (!cabeza) return true;

  let p1 = clon(cabeza);
  let p2 = reversarLista(encontrarMitad(clon(cabeza)));
  let esPalindromo = true;

  while (esPalindromo && p2) {
    if (p1.valor != p2.valor) {
      esPalindromo = false;
    }

    p1 = p1.siguiente;
    p2 = p2.siguiente;
  } 

  return esPalindromo;
}

function encontrarMitad(cabeza) {
  let rapido = cabeza;
  let lento = cabeza;

  while(rapido.siguiente && rapido.siguiente.siguiente) {
    lento = lento.siguiente;
    rapido = rapido.siguiente.siguiente;
  }

  return lento.siguiente;
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
