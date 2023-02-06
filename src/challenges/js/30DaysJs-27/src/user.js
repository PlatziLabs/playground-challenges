export class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}
