export function execCallback(callback) {
  window.setTimeout(() => {
    callback();
  }, 2000);
}
