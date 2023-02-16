export function countNumbers(count, callback) {
  let currentCount = 0;
  const interval = window.setInterval(() => {
    currentCount++;
    if (currentCount > count) {
      clearInterval(interval);
    } else {
      callback(currentCount);
    }
  }, 1000);
}
