import { solution } from "./exercise";

describe("tests", () => {
  it("should return object with not approved drivingLicense", () => {
    const car = { color: 'red', brand: 'Kia' };
    const carSolution = { ...car, drivingLicense: false };

    const rta = solution(car);
    expect(rta).toEqual(carSolution);
  });
  it("should return object with approved drivingLicense", () => {
    const car = {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    };
    const carSolution = { ...car, drivingLicense: true };

    const rta = solution(car);
    expect(rta).toEqual(carSolution);
  });
  it("should return object with approved drivingLicense", () => {
    const car = {
      licensePlate: 'RGB255',
    };
    const carSolution = { ...car, drivingLicense: true };

    const rta = solution(car);
    expect(rta).toEqual(carSolution);
  });
});
