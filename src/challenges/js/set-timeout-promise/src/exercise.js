export function runCode() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve('Hello, World!');
    }, 2000);
  });
}
