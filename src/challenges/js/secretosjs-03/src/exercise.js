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
    this.#history.state = {
      propulsionTo: this.#propulsionTo,
      status: newStatus,
    };
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

  get state() {
    return this.#history[this.#history.length - 1];
  }

  set state(newState) {
    const stateStr = JSON.stringify(this.state);
    const newStateStr = JSON.stringify(newState);

    if (stateStr != newStateStr) {
      this.#history.push(newState);
    }
  }

  get fullState() {
    return this.#history;
  }
}