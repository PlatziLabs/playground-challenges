import { Mail } from "./mail";

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    // Tu código aquí 👈🏻
  }

  dequeue() {
    // Tu código aquí 👈🏻
  }

  peek() {
    // Tu código aquí 👈🏻
  }

  size() {
    // Tu código aquí 👈🏻
  }
}
