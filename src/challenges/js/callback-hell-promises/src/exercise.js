import { doTask1, doTask2, doTask3 } from './tasks';

// Nota que las funciones doTask1, doTask2, doTask3 cambiaron 👆🏻

export function runCode() {
  const strings = [];
  return doTask1()
  .then((rta1) => {
    strings.push(rta1);
    return doTask2();
  })
  .then((rta2) => {
    strings.push(rta2);
    return doTask3();
  })
  .then((rta3) => {
    strings.push(rta3);
    return strings;
  })
}
