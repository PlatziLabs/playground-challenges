import { Astronaut, SpaceShip, simulador } from "./exercise";

describe("tests", () => {
  it("should return ['left']", () => {
    const rocket99 = new SpaceShip({ key: "bkhucu5r6uykdqbhgj" });
    const capitandc = new Astronaut({ name: "capitandc" });
    rocket99.getAccessKey(capitandc);

    const rta = simulador(capitandc, rocket99, "left");
    expect(rta).toEqual(["left"]);
  });

  it("should return ['Incorrect Access Key'] (cloning the astronaut key)", () => {
    const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
    const capitandc = new Astronaut({ name: "Capitán DC" });
    rocket99.getAccessKey(capitandc);

    const comandanteJuanita = new Astronaut({ name: "Comandante Juanita" });
    comandanteJuanita._spaceShipKey = capitandc._spaceShipKey;

    const rta = simulador(comandanteJuanita, rocket99, "right");
    expect(rta).toEqual(["Incorrect Access Key"]);
  });

  it("should return ['Incorrect Access Key'] (cloning the spaceship key)", () => {
    const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
    const capitanimpostor = {
      name: "Capitán Impostor",
      _spaceShipKey: rocket99._key,
      navigate(spaceShip, direction) {
        spaceShip.navigator(direction, { accessKey: this._spaceShipKey });
      }
    };

    const rta = simulador(capitanimpostor, rocket99, "COLISSION");
    expect(rta).toEqual(["Incorrect Access Key"]);
  });
});
