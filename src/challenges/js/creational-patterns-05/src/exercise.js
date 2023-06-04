/**
 * Note: we encourage check the tests file first before you go
 * with the solution to the challange.
 *
 * This will help you to determine which work must be done, this
 * could be an initial approach to TDD (Test Driven Development).
 */

export function runSingleInstanceSimulation() {
  const rocketsCreationHistory = HistoryLog.getInstance();

  rocketsCreationHistory.addEntry('Galaxy-Rocket-Creation');
  rocketsCreationHistory.addEntry('Odissey-Rocket-Creation');

  const newRocketsCreationHistory = HistoryLog.getInstance();

  return {
    rocketsCreationHistory,
    newRocketsCreationHistory,
  };
}

class HistoryLog {
  static instance = undefined;

  constructor() {
    this._history = [];
  }

  // Your code goes here...
  static getInstance() {
    if (!HistoryLog.instance) {
      HistoryLog.instance = new HistoryLog();
    }

    return HistoryLog.instance;
  }

  get history() {
    return this._history;
  }

  addEntry(msg) {
    this.history.push(msg);
  }
}
