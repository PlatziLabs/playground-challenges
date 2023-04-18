import { Node } from "./Node";

export class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.bedsAvailable = Array.from({ length: beds });
    for (let i = 0; i < beds; i++) {
      this.bedsAvailable[i] = i + 1;
    }
  }

  addPatient(name, age) {
    if (this.bedsAvailable.length === 0) {
      throw new Error("No hay camas disponibles");
    }

    const newPatient = new Node(name, age, this.bedsAvailable[0]);
    this.bedsAvailable.shift();

    if (!this.head) {
      this.head = newPatient;
      this.tail = newPatient;
    } else {
      this.tail.next = newPatient;
      this.tail = newPatient;
    }
  }

  removePatient(name) {
    if (!this.head) {
      throw new Error("Paciente no encontrado");
    }
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.name === name) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.bedsAvailable.push(current.bedNumber);
        return;
      }

      prev = current;
      current = current.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    let current = this.head;

    while (current) {
      if (current.name === name) {
        return {
          name: current.name,
          age: current.age,
          bedNumber: current.bedNumber,
        };
      }

      current = current.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatientList() {
    const patients = [];
    let current = this.head;

    while (current) {
      patients.push({
        name: current.name,
        age: current.age,
        bedNumber: current.bedNumber,
      });

      current = current.next;
    }

    return patients;
  }

  getAvailableBeds() {
    return this.bedsAvailable.length;
  }
}
