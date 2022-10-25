import { createPetList } from "./exercise";

describe("tests", () => {
  it(`should return a pet list using closures`, () => {
    const petList = createPetList();
    petList({
      type: 'cat',
      name: 'Michi',
      age: 3,
      weight: '2kg',
      description: 'A nice cat'
    })
    petList({
      type: 'dog',
      name: 'firulais',
      age: 6,
      weight: '15kg',
      description: 'A good dog'
    })
    const rta = petList();
    expect(rta).toEqual([ {
      type: 'cat',
      name: 'Michi',
      age: 3,
      weight: '2kg',
      description: 'A nice cat'
    },
    {
      type: 'dog',
      name: 'firulais',
      age: 6,
      weight: '15kg',
      description: 'A good dog'
    }]);
  });

  it(`should return ["dog", "cat", "hamster"]`, () => {
    const petList = createPetList();
    petList("dog")
    petList("cat")
    petList("hamster")
    const rta = petList()
    expect(rta).toEqual(["dog", "cat", "hamster"] );
  });

  it(`should return []`, () => {
    const petList = createPetList();
    const rta = petList()
    expect(rta).toEqual([]);
  });

  
});
