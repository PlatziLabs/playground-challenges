export function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }

    return firstNum;
  };
}
