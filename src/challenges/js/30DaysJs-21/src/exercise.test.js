import { Car } from "./exercise";

const toyota = new Car("Toyota", "Corolla", 2022, 0);

describe("tests", () => {
  it("should return the car data", () => {
    expect(toyota.brand).toEqual("Toyota");
    expect(toyota.model).toEqual("Corolla");
    expect(toyota.year).toEqual(2022);
    expect(toyota.mileage).toEqual(0);
  });

  it("should turn on the car", () => {
    toyota.turnOn();
    expect(toyota.state).toEqual(true);
  });

  it("should turn off the car", () => {
    toyota.turnOff();
    expect(toyota.state).toEqual(false);
  });

  it("should increase the mileage", () => {
    toyota.turnOn();
    toyota.drive(100);
    expect(toyota.mileage).toEqual(100);
  });

  it("should not increase the mileage if the car is off", () => {
    toyota.turnOff();
    expect(() => toyota.drive(100)).toThrow("El auto está apagado");
    expect(toyota.mileage).toEqual(100);
  });

  it("should throw an error", () => {
    toyota.turnOff();
    expect(() => toyota.drive(100)).toThrow("El auto está apagado");
  });
});
