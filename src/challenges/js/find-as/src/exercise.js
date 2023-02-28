export function findAs(deck) {
  const rta = deck.find((item) => item === 'AS');
  return rta ? 'Tienes el AS' : 'No, tienes el AS';
}
