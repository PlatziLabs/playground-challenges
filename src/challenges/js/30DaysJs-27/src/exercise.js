export class Chat {
  constructor() {
    if (!Chat.instance) {
      this.init();
      Chat.instance = this;
    }
    return Chat.instance;
  }

  init() {
    this.users = [];
  }

  sendMessage(message) {
    this.users.forEach((user) => {
      user.receiveMessage(message);
    });
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users = this.users.filter((u) => u !== user);
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  receiveMessage(message) {
    return `${this.name} recibiste un mensaje: ${message}`;
  }
}
