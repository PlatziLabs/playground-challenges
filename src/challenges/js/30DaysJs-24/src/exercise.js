export class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
    };
  }
}

export class Mammal extends Animal {
  constructor(name, age, species, hasFur) {
    super(name, age, species, hasFur);
    this.hasFur = hasFur;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      hasFur: this.hasFur,
    };
  }
}

export class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this.breed = breed;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      breed: this.breed,
    };
  }

  bark() {
    return `woof!`;
  }
}
