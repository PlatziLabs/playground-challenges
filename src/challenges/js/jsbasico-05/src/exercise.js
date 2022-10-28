export function solution(estudiantes, deathCount, nuevo) {
  for (var i = 0; i < deathCount; i++) {
    estudiantes.pop();
  }

  estudiantes.push(nuevo);
  return estudiantes;
}
