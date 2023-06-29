export class User {
  constructor(name) {
    this.name = name;
  }

  notify(task) {
    console.log(`Usuario ${this.name}: La tarea "${task.description}" ha sido completada.`);
  }
}
