import { getStudentAverage } from "./exercise";

describe("tests", () => {
  let studentsA, studentsB;

  beforeEach(() => {
    studentsA = [
      {
        name: "Pedro",
        grades: [90, 87, 88, 90],
      },
      {
        name: "Jose",
        grades: [99, 71, 88, 96],
      },
      {
        name: "Maria",
        grades: [92, 81, 80, 96],
      },
    ];

    studentsB = [
      {
        name: "Pepe",
        grades: [90, 87, 78],
      },
      {
        name: "Jose",
        grades: [78, 65, 92],
      },
      {
        name: "Tanya",
        grades: [71, 95, 75],
      },
      {
        name: "Saul",
        grades: [90, 93, 80],
      },
      {
        name: "Diego",
        grades: [96, 60, 89],
      },
    ];
  });

  it("should return 88.17 as class average", () => {
    const rta = getStudentAverage(studentsA);
    expect(rta.classAverage).toEqual(88.17);
  });

  it("should return the class average as number", () => {
    const rta = getStudentAverage(studentsA);
    expect(typeof rta.classAverage).toBe("number");
  });

  it("should return a list of 3 students", () => {
    const rta = getStudentAverage(studentsA);
    expect(rta.students.length).toEqual(3);
  });

  it("should return a correct average for each student", () => {
    const rta = getStudentAverage(studentsA);
    expect(rta.students).toEqual([
      {
        name: "Pedro",
        average: 88.75,
      },
      {
        name: "Jose",
        average: 88.5,
      },
      {
        name: "Maria",
        average: 87.25,
      },
    ]);
  });

  it("should return a correct class average with more students", () => {
    const rta = getStudentAverage(studentsB);
    expect(rta.classAverage).toEqual(82.6);
  });

  it("should return a correct student average with less grades", () => {
    const rta = getStudentAverage(studentsB);
    expect(rta.students).toEqual([
      {
        name: "Pepe",
        average: 85,
      },
      {
        name: "Jose",
        average: 78.33,
      },
      {
        name: "Tanya",
        average: 80.33,
      },
      {
        name: "Saul",
        average: 87.67,
      },
      {
        name: "Diego",
        average: 81.67,
      },
    ]);
  });
});
