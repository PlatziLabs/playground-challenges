export function restoreIpAddresses(ip) {
  const ipValidas = [];
  crearCombinaciones(ip, 0, [], ipValidas);
  return ipValidas;
}

const crearCombinaciones = (ip, index, ipActual, ipValidas) => {
  if (ipActual.length == 4) {
      ipValidas.push(ipActual.join('.'));
      return;
  }

  let ipPorValidar = '';
  for (let i = index; i < ip.length; i++) {
      ipPorValidar += ip[i];
      if (!esValido(ip, index, ipPorValidar, ipActual)) continue;
      ipActual.push(ipPorValidar);
      crearCombinaciones(ip, i + 1, ipActual, ipValidas);
      ipActual.pop();
  }
}

const esValido = (ip, index, ipPorValidar, ipActual) => {
  if (ipPorValidar == '0') return false;
  if (Number(ipPorValidar) > 255) return false;
  if (ipPorValidar.length > 1 && ipPorValidar[0] == '0') return false;

  const remainingLength = ip.length - index;
  if (ipActual.length == 3 && ipPorValidar.length < remainingLength) {
      return false;
  }

  return true;
}