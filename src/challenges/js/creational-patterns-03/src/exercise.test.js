import {
  RocketAssemblyLine,
  ManualAssemblyLine,
  runGalaxyProductsAssembleSimulation,
  runOdisseyProductsAssembleSimulation,
} from './exercise';

describe('Exercise 3. Assembling rockets one step at time', () => {
  it('verify if galaxy products were built correctly', () => {
    const rocketAssemblyLine = new RocketAssemblyLine();
    const manualAssemblyLine = new ManualAssemblyLine();

    const { manual, rocket } = runGalaxyProductsAssembleSimulation({
      rocketAssemblyLine: rocketAssemblyLine,
      manualAssemblyLine: manualAssemblyLine,
    });

    const MODEL = 'Galaxy';
    const ENGINE = 'solid';
    const CATEGORY = 'valkyria';
    const NOZZLE = 'single';

    // Verify galaxy rocket parts
    expect(rocket.model).toBe(MODEL);
    expect(rocket.engine).toBe(ENGINE);
    expect(rocket.category).toBe(CATEGORY);
    expect(rocket.nozzle).toBe(NOZZLE);

    // Verify galaxy manual
    expect(manual.description).toBe(
      `Rocket Model: ${MODEL}, Engine : ${ENGINE}, Category: ${CATEGORY}, Nozzle: ${NOZZLE}`
    );
  });

  it('verify if odissey products were built correctly', () => {
    const rocketAssemblyLine = new RocketAssemblyLine();
    const manualAssemblyLine = new ManualAssemblyLine();

    const { manual, rocket } = runOdisseyProductsAssembleSimulation({
      rocketAssemblyLine: rocketAssemblyLine,
      manualAssemblyLine: manualAssemblyLine,
    });

    const MODEL = 'Odissey';
    const ENGINE = 'liquid';
    const CATEGORY = 'hermes';
    const NOZZLE = 'double';

    // Verify odissey rocket parts
    expect(rocket.model).toBe(MODEL);
    expect(rocket.engine).toBe(ENGINE);
    expect(rocket.category).toBe(CATEGORY);
    expect(rocket.nozzle).toBe(NOZZLE);

    // Verify odissey manual
    expect(manual.description).toBe(
      `Rocket Model: ${MODEL}, Engine : ${ENGINE}, Category: ${CATEGORY}, Nozzle: ${NOZZLE}`
    );
  });
});
