export function solution(num) {
  let arrayResult = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      arrayResult.push(i);
  }
  return arrayResult;

  function isPrime(num) {
    if (num <= 1)
      return false;
    if (num <= 3)
      return true;

    if (num % 2 == 0 || num % 3 == 0)
      return false;

    for (let i = 5; i * i <= num; i = i + 6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;

    return true;
  }
}

