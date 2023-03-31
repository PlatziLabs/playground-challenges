export class Pay {

  constructor() {}

  makePay(quantity) {
    return {
      realized: true,
      quantity,
    };
  }
}
