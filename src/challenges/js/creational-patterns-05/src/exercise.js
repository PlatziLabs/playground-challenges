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
