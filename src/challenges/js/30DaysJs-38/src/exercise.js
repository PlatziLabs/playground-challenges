import { Node } from "./Node";

export class patientList {
  constructor(beds){
    this.head = null
    this.tail = null
    this.bedsAvailable = beds
  }

  addPatient(name, age){
    if(this.bedsAvailable === 0){
      throw new Error("No hay camas disponibles")
    }

    const newPatient = new Node(name, age, beds - this.bedsAvailable + 1)
    this.bedsAvailable--

    if(!this.head){
      this.head = newPatient
      this.tail = newPatient
    }else{
      this.tail.next = newPatient
      this.tail = newPatient
    }
  }

  removePatient(name){
    if(!this.head){
      throw new Error("Paciente no encontrado")
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

        this.bedsAvailable++;
        return;
      }

      prev = current;
      current = current.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatient(name){
    let current = this.head

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

  getPatientList(){
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
}