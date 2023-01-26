export class Pay {
  constructor() {}

  makePay(quantity) {
    return {
      realized: true,
      quantity,
    };
  }
}

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

export class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this.email,
    };
  }
}

export class Cash extends Pay {
  constructor() {
    super();
  }
}

export function processPay(method, quantity) {
  return method.makePay(quantity);
}
