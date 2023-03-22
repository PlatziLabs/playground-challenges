export function orangesRotting(cultivo) {
  if (!cultivo || !cultivo.length) return 0;
  
  const cola = [];
  let cantidadFrescas = 0;

  for (let i = 0; i < cultivo.length; i++) {
    for (let j = 0; j < cultivo[0].length; j++) {
      if (cultivo[i][j] == 2) {
        cola.push([i,j]);
      } else if (cultivo[i][j] == 1) {
        cantidadFrescas++;
      }
    }
  }

  if (cantidadFrescas == 0) return 0;

  const direcciones = [[1,0],[-1,0],[0,1],[0,-1]];
  let dias = 0;

  while (cola.length) {
    ++dias;

    for (let i = 0; i < cola.length; i++) {
      const posicionActual = cola.shift();

      for (let direccion of direcciones) {
        let x = posicionActual[0] + direccion[0];
        let y = posicionActual[1] + direccion[1];

        if (
          x < 0
          || y < 0
          || x >= cultivo.length
          || y >= cultivo[0].length
          || cultivo?.[x]?.[y] != 1
        ) continue;

        cultivo[x][y] = 2;
        cola.push([x,y]);
        cantidadFrescas--;
      }
    }
  }
  
  return cantidadFrescas == 0
    ? dias - 1
    : -1;
}

/*
 * Recuerda que puedes aprender sobre
 * LinkedLists con JavaScript en esta clase:
 * https://platzi.com/clases/2156-estructuras-datos/33730-linked-list/
 */

