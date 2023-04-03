export function letterCombinations(numeroCelular) {
  const teclado = {};
  teclado['2'] = "abc"; 
  teclado['3'] = "def"; 
  teclado['4'] = "ghi"; 
  teclado['5'] = "jkl"; 
  teclado['6'] = "mno"; 
  teclado['7'] = "pqrs"; 
  teclado['8'] = "tuv"; 
  teclado['9'] = "wxyz";

  const listaPalabras = generarCombinaciones(0, numeroCelular, "", [], teclado);
  return listaPalabras;
}

function generarCombinaciones(i, numeroCelular, palabra, listaPalabras, teclado) {
  if (i == numeroCelular.length) {
    if (palabra != "") {
      listaPalabras.push(palabra);
    }
    return;
  }

  for (let ch of teclado[numeroCelular[i]]) {
    generarCombinaciones(i + 1, numeroCelular, palabra + ch, listaPalabras, teclado);
  }

  return listaPalabras;
}
