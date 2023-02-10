export function createCalculator() {
  let total = 0;

  return {
    add(value) {
      total += value;
      return total;
    },

    subtract(value) {
      total -= value;
      return total;
    },

    multiply(value) {
      total *= value;
      return total;
    },

    divide(value) {
      total /= value;
      return total;
    },

    clear() {
      total = 0;
      return total;
    },

    getTotal() {
      return total;
    },
  };
}
