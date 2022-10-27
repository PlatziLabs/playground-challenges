export function solution(car) {
  if (car.licensePlate) {
    car.drivingLicense = true;
  } else {
    car.drivingLicense = false;
  }
}
