import { solution } from "./exercise";

describe("tests", () => {
  it("should return 2 cars", () => {
    const cars = [
      { color: 'red', brand: 'Kia', },
      { color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111', },
      { licensePlate: 'RGB255', },
    ];

    const rta = solution(cars);

    expect(rta).toEqual([
      { "color": "gray", "brand": "Chevrolet", "licensePlate": "AAA111" },
      { "licensePlate": "RGB255" }
    ]);
  });

  it("should return 3 cars", () => {
    const cars = [
      { color: 'red', brand: 'Kia', licensePlate: 'XYZ321', },
      { color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111', },
      { licensePlate: 'RGB255', },
    ];

    const rta = solution(cars);

    expect(rta).toEqual([
      { "color": "red", "brand": "Kia", "licensePlate": "XYZ321", },
      { "color": "gray", "brand": "Chevrolet", "licensePlate": "AAA111" },
      { "licensePlate": "RGB255" }
    ]);
  });
});
