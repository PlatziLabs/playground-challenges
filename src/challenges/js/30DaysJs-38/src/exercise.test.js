import { PatientList } from "./exercise";

describe("tests", () => {
  let list;

  beforeEach(() => {
    list = new PatientList(3);
    list.addPatient("Paciente 1", 20);
    list.addPatient("Paciente 2", 30);
  });

  it("should add patient to list", () => {
    list.addPatient("Paciente 3", 25);
    expect(list.getPatientList().length).toBe(3);
  });

  it("should decrement beds available", () => {
    list.addPatient("Paciente 3", 25);
    expect(list.getAvailableBeds()).toBe(0);
  });

  it("should throw error if no beds available", () => {
    list.addPatient("Paciente 3", 25);
    expect(() => list.addPatient("Paciente 4", 50)).toThrow();
  });

  it("should remove patient from list", () => {
    list.removePatient("Paciente 2");
    expect(list.getPatientList().length).toBe(1);
  });

  it("should increment beds available", () => {
    list.removePatient("Paciente 2");
    expect(list.getAvailableBeds()).toBe(2);
  });

  it("should throw error if patient not found", () => {
    expect(() => list.removePatient("Paciente 3")).toThrow();
  });

  it("should return patient object", () => {
    expect(list.getPatient("Paciente 1")).toEqual({
      name: "Paciente 1",
      age: 20,
      bedNumber: 1,
    });
  });

  it("should throw error if patient not found", () => {
    expect(() => list.getPatient("Paciente 3")).toThrow();
  });

  it("should return array of patient objects", () => {
    expect(list.getPatientList()).toEqual([
      { name: "Paciente 1", age: 20, bedNumber: 1 },
      { name: "Paciente 2", age: 30, bedNumber: 2 },
    ]);
  });

  it("should assign a bed with the correct number after delete other patient", () => {
    list.addPatient("Paciente 3", 21);
    list.removePatient("Paciente 1");
    list.addPatient("Test 3", 33);
    expect(list.getPatientList()).toEqual([
      { name: "Paciente 2", age: 30, bedNumber: 2 },
      { name: "Paciente 3", age: 21, bedNumber: 3 },
      { name: "Test 3", age: 33, bedNumber: 1 },
    ]);
  });
});
