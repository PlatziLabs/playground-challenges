export function runSimulation({
  liquidFuelRocketFactory,
  solidFuelRocketFactory,
}) {
  // Liquid fuel rocket
  const liquidFuelRocket = liquidFuelRocketFactory.createRocket();

  // Solid fuel rocket
  const solidFuelRocket = solidFuelRocketFactory.createRocket();

  return { liquid: liquidFuelRocket, solid: solidFuelRocket };
}

export class Rocket {
  constructor({ model, engine, category, nozzle }) {
    this.model = model;
    this.engine = engine;
    this.category = category;
    this.nozzle = nozzle;
  }
}

export class RocketFactory {
  createRocket() {
    return new Error('Not available at this moment!');
  }
}
