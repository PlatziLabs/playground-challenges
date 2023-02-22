import { processPay } from "./exercise";
import { Pay } from "./Pay.class.js";
import { PayPal } from "./PayPal.class.js";
import { Cash } from "./Cash.class.js";
import { Card } from "./Card.class.js";

describe("tests", () => {
  it("PayPal should extends from pay", () => {
    const rta = PayPal.prototype instanceof Pay;
    expect(rta).toBe(true);
  });

  it("Card should extends from pay", () => {
    const rta = Card.prototype instanceof Pay;
    expect(rta).toBe(true);
  });

  it("Cash should extends from pay", () => {
    const rta = Cash.prototype instanceof Pay;
    expect(rta).toBe(true);
  });

  it("Pay method should return a correct object", () => {
    const rta = new Pay().makePay(100);
    expect(rta).toEqual({
      realized: true,
      quantity: 100,
    });
  });

  it("PayPal makePay method should return a correct object", () => {
    const rta = new PayPal("test@mail.com").makePay(135);
    expect(rta).toEqual({
      realized: true,
      quantity: 135,
      platform: "PayPal",
      email: "test@mail.com",
    });
  });

  it("Card makePay method should return a correct object", () => {
    const rta = new Card("4913478952471122").makePay(255);
    expect(rta).toEqual({
      realized: true,
      quantity: 255,
      lastCardNumbers: "1122",
    });
  });

  it("Card makePay method should throw an error", () => {
    const rta = new Card(4913952471122);
    expect(() => rta.makePay(122)).toThrow();
  });

  it("processPay should call to makePay method", () => {
    const cash = new Cash();
    const card = new Card("4913478952471122");
    const paypal = new PayPal("test@mail.com");

    expect(processPay(cash, 200)).toEqual({
      realized: true,
      quantity: 200,
    });
    expect(processPay(card, 100)).toEqual({
      realized: true,
      quantity: 100,
      lastCardNumbers: "1122",
    });
    expect(processPay(paypal, 300)).toEqual({
      realized: true,
      quantity: 300,
      platform: "PayPal",
      email: "test@mail.com",
    });
  });
});
