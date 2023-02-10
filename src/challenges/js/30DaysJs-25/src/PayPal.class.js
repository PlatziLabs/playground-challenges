import { Pay } from "./Pay.class.js";

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
