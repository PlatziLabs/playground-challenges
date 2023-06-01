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
  constructor() {
    this._history = [];
  }

  // Your code goes here...

  get history() {
    return this._history;
  }
}
