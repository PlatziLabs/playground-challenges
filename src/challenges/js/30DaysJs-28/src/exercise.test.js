import { CarBuilder } from "./exercise";

describe("tests", () => {
  let car;

  beforeEach(() => {
    car = new CarBuilder();
  });

  it("should correctly set the year", () => {
    car.setYear(2021);
    expect(car.year).toBe(2021);
  });

  it("should correctly set the model", () => {
    car.setModel("Model X");
    expect(car.model).toBe("Model X");
  });

  it("should correctly set the brand", () => {
    car.setBrand("Tesla");
    expect(car.brand).toBe("Tesla");
  });

  it("should correctly set the color", () => {
    car.setColor("Red");
    expect(car.color).toBe("Red");
  });

  it("should correctly set the price", () => {
    car.setPrice(50000);
    expect(car.price).toBe(50000);
  });

  it("should correctly set the isAvailable flag", () => {
    car.setIsAvailable(false);
    expect(car.isAvailable).toBe(false);
  });

  it("should build the car object correctly", () => {
    car
      .setYear(2021)
      .setModel("Model X")
      .setBrand("Tesla")
      .setColor("Red")
      .setPrice(50000)
      .setIsAvailable(false)
      .build();
    expect(car.year).toBe(2021);
    expect(car.model).toBe("Model X");
    expect(car.brand).toBe("Tesla");
    expect(car.color).toBe("Red");
    expect(car.price).toBe(50000);
    expect(car.isAvailable).toBe(false);
  });
});
