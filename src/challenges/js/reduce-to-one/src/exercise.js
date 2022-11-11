export function solution(num) {
  // Tu código aquí 👈
  let count = 0;
  while (num > 1) {
    count++;
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
    }
    else if (num % 4 === 1 || num === 3) {
      num -= 1;
    }
    else {
      num += 1;
    }
  }
  return count;
}
