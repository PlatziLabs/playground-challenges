export class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if (this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("Usuario no registrado");
    }
  }

  getHistory() {
    if (this.user.isLoggedIn()) {
      return this.messages.getHistory();
    } else {
      throw new Error("Usuario no registrado");
    }
  }
}

export class User {
  constructor(name) {
    this.name = name;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
