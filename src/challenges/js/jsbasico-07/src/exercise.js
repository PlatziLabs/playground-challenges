export function solution(cars) {
  // 👇 Este es el código que no funciona
  return cars.filter(function (car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}
