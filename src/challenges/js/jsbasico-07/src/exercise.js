export function solution(cars) {
  return cars.filter(function (car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}
