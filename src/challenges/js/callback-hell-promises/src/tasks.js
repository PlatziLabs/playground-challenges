// 👇 Ahora las funciónes no reciben un callback si no que son Promesas que retornan el valor.

export function doTask1() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 1'), 300);
  });
}

export function doTask2() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 2'), 300);
  });
}

export function doTask3() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 3'), 300);
  });
}
