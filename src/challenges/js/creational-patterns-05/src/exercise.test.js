const { runSingleInstanceSimulation } = require('./exercise');

describe('Exercise 5. Tracking rockets creation', () => {
  it('rockets creation log history instance must be the same', () => {
    const { rocketsCreationHistory, newRocketsCreationHistory } =
      runSingleInstanceSimulation();

    /**
     * In both test we are looking equality, both cases are comparing
     * which reference the variables are pointing
     */
    expect(rocketsCreationHistory).toBe(newRocketsCreationHistory);
    expect(rocketsCreationHistory.history).toBe(
      newRocketsCreationHistory.history
    );
  });
});
