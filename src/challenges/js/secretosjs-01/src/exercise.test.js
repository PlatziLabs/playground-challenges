import { Astronaut, Satelite, SpaceStation, simulacion } from "./exercise";

describe("tests", () => {
  it("should not push message (space station is an impostor)", () => {
    const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
    const capitanImpostor = { name: 'capitanimpostor' };
    const estacionFalsa = { name: 'Estacion Espacial Falsa', team: ["Capitan Impostor"] };
    
    const messages = simulacion({
      satelite: satelitePlatziSat01,
      astronauta: capitanImpostor,
      estacion: estacionFalsa,
      texto: "Muajajaja 2",
    });

    const isMessageInArray = messages.some(msg => msg.from == "capitanimpostor");
    
    expect(isMessageInArray).toBe(false);
  });

  it("should not push message (astronaut is an impostor)", () => {
    const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
    const capitanImpostor = { name: 'capitanimpostor' };
    const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial de Platzi' });
    
    const messages = simulacion({
      satelite: satelitePlatziSat01,
      astronauta: capitanImpostor,
      estacion: estacionPlatzi,
      texto: "Muajaja",
    });

    const isMessageInArray = messages.some(msg => msg.from == "capitanimpostor");
    
    expect(isMessageInArray).toBe(false);
  });

  it("should not push message (astronaut is not a team member)", () => {
    const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
    const comandanteJuanita = new Astronaut({ name: 'comandantejuanita' });
    const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial de Platzi' });
    
    const messages = simulacion({
      satelite: satelitePlatziSat01,
      astronauta: comandanteJuanita,
      estacion: estacionPlatzi,
      texto: "Reporte diario: todo en orden",
    });

    const isMessageInArray = messages.some(msg => msg.from == "comandantejuanita");
    
    expect(isMessageInArray).toBe(false);
  });

  it("should push message", () => {
    const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
    const capitanDC = new Astronaut({ name: 'capitandc' });
    const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial de Platzi' });
    estacionPlatzi.addTeamMember(capitanDC);
    
    const messages = simulacion({
      satelite: satelitePlatziSat01,
      astronauta: capitanDC,
      estacion: estacionPlatzi,
      texto: "SOS",
    });

    const isMessageInArray = messages.some(msg => msg.from == "capitandc");
    
    expect(isMessageInArray).toBe(true);
  });
});
