import { Mail } from "./mail";

export class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  enqueue(mail) {
    if (!(mail instanceof Mail)) {
      throw new Error("Este no es un email seguro ❌");
    }

    if (this.length === 0) {
      this.top = mail;
      this.bottom = mail;
    } else {
      const hold = this.bottom;
      this.top.next = hold;
      this.bottom = mail;
    }

    this.length++;
  }

  dequeue() {
    const priorityEmail = this.top;
    this.top = this.top.next;

    this.size--;
    return priorityEmail;
  }

  size() {
    return this.size;
  }
}
