import { getPetExerciseInfo } from "./exercise";

describe("tests", () => {
  it("should return a string for dogs", () => {
    const petType = "perro";
    const age = 3;
    const rta = getPetExerciseInfo(petType, age);
    expect(typeof rta).toBe("string");
  });

  it("should return a correct string for dogs", () => {
    const petType = "perro";
    const age = 3;
    const rta = getPetExerciseInfo(petType, age);
    expect(rta).toBe("Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
  });

  it("should return a string for cats", () => {
    const petType = "gato";
    const age = 5;
    const rta = getPetExerciseInfo(petType, age);
    expect(typeof rta).toBe("string");
  });

  it("should return a string for birds", () => {
    const petType = "ave";
    const age = 7;
    const rta = getPetExerciseInfo(petType, age);
    expect(typeof rta).toBe("string");
  });

  it("should return a correct string for invalid pets", () => {
    const petType = "Mamut";
    const age = 123;
    const rta = getPetExerciseInfo(petType, age);
    expect(rta).toBe("Tipo de mascota inválida");
  });


});
