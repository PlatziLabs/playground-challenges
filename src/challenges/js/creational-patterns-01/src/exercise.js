export class Rocket {
  constructor({ model, engine, category, nozzle }) {
    // Your code goes here...
  }

  get model() {
    // Your code goes here...
  }

  get engine() {
    // Your code goes here...
  }

  get category() {
    // Your code goes here...
  }

  get nozzle() {
    // Your code goes here...
  }
}

export class LiquidFuelRocket {
  // Your code goes here...
}

export class SolidFuelRocket {
  // Your code goes here...
}

export class RocketFactory {
  // Your code goes here...
  createRocket() {
    return new Error('Not available at this moment!');
  }
}

export class LiquidFuelRocketsFactory {
  // Your code goes here...
}

export class SolidFuelRocketsFactory {
  // Your code goes here...
}
