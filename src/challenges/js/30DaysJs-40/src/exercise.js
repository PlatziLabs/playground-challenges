import { Mail } from "./mail";

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    const newMail = new Mail(from, to, body, subject);
    if (this.isEmpty()) {
      this.first = newMail;
    } else {
      this.last.next = newMail;
    }
    this.last = newMail;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("La cola está vacía");
    }
    const removedMail = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedMail.next;
    }
    removedMail.next = null;
    this.length--;
    return removedMail;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("La cola está vacía");
    }
    return this.first;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}
