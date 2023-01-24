import { Motor, History } from "./exercise";

describe("tests", () => {
  it("should avoid two duplicates", () => {
    const history = new History();
    const motorUp = new Motor("up", history);
    const motorDown = new Motor("down", history);

    motorUp.turnOn();
    motorDown.turnOn();
    motorUp.turnOff();
    motorUp.turnOff(); // Repetido
    motorUp.turnOn();
    motorUp.turnOn(); // Repetido
    motorDown.turnOff();

    const rta = history.getFullState();
    expect(rta).toEqual([
      { "propulsionTo": "up", "status": "on" },
      { "propulsionTo": "down", "status": "on" },
      { "propulsionTo": "up", "status": "off" },
      { "propulsionTo": "up", "status": "on" },
      { "propulsionTo": "down", "status": "off" }
     ]);
  });
});
