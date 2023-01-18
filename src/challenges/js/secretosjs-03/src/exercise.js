export class Motor {
  #propulsionTo;
  #status = "off";
  #history;

  constructor(propulsionTo, history) {
    this.#propulsionTo = propulsionTo;
    this.#history = history;
  }

  get status() {
    return this.#status;
  }

  #setStatus(newStatus) {
    this.#status = newStatus;
  }

  turnOn() {
    this.#setStatus("on");
  }

  turnOff() {
    this.#setStatus("off");
  }

  get history() {
    return this.#history.fullState;
  }
}

export class History {
  #history = [];

  get fullState() {
    return this.#history;
  }
}
