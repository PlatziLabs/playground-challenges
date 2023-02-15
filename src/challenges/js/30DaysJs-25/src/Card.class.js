import { Pay } from "./Pay.class.js";

export class Card extends Pay {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  makePay(quantity) {
    if (this.cardNumber.length !== 16) {
      throw new Error("Tarjeta invalida");
    }

    const lastCardNumbers = this.cardNumber.toString().slice(-4);

    return {
      ...super.makePay(quantity),
      lastCardNumbers,
    };
  }
}
