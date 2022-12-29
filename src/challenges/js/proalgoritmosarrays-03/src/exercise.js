export function maxArea(alturas) {
  let izquierda = 0;
  let derecha = alturas.length - 1;
  let areaMaxima = 0;

  while (izquierda < derecha) {
    let areaActual = (derecha - izquierda) * Math.min(alturas[izquierda], alturas[derecha]);
    areaMaxima = Math.max(areaMaxima, areaActual);

    if (alturas[izquierda] < alturas[derecha]) {
      izquierda += 1;
    } else {
      derecha -= 1;
    }
  }

  return areaMaxima;
}
