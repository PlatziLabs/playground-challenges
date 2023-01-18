export function simulacion({ satelite, estacion, astronauta, texto }) {
  satelite.send({
    from: astronauta,
    to: estacion,
    text: texto,
  });

  return satelite.messages;
}

export class Astronaut {
  constructor({ name }) {
    this.name = name;
  }
}

export class SpaceStation {
  constructor({ name }) {
    this.name = name;
    this.team = [];
  }

  addTeamMember(newMember) {
    if (newMember instanceof Astronaut) {
      this.team.push(newMember.name);
    }
  }

  isTeamMember(supposedMember) {
    return this.team.includes(supposedMember.name);
  }
}

export class Satelite {
  constructor({
    name,
  }) {
    this.name = name;
    this.messages = [];
  }
  
  send({ from, to, text }) {
    const isAstronaut = from instanceof Astronaut;
    const isSpaceStation = to instanceof SpaceStation;
    const isTeamMember = to.isTeamMember?.(from);
    
    if (isAstronaut && isSpaceStation && isTeamMember) {
      this.messages.push({
        from: from.name,
        to: to.name,
        text,
      });
    }
  }
}
