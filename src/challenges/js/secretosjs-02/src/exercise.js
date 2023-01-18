export function simulador(astronaut, spaceShip, direction) {
  astronaut.navigate(spaceShip, direction);
  return spaceShip._movements;
}

export class Astronaut {
  constructor({ name }) {
    this.name = name;
    this._spaceShipKey = undefined;
  }

  setAccessKey(accessKey) {
    this._spaceShipKey = accessKey;
  }

  navigate(spaceShip, direction) {
    spaceShip.navigator(direction, { accessKey: this._spaceShipKey });
  }
}

export class SpaceShip {
  constructor({ key }) {
    this._key = key;
    this._movements = [];
  }
  
  getAccessKey(astronaut) {
    const isAstronaut = astronaut instanceof Astronaut;

    if (isAstronaut) {
      astronaut.setAccessKey(this._key);
    }
  }

  navigator(direction, { accessKey }) {
    if (this._key == accessKey) {
      this._movements.push(direction)
    } else {
      this._movements.push("Incorrect Access Key");
    }
  }
}
