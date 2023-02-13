export class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  addFriend(user) {
    this._friends.push(user);
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message);
  }

  showMessages() {
    return this._messages;
  }
}
