export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time)
  })
}
