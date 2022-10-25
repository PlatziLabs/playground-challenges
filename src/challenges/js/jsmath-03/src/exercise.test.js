import { solution } from "./exercise";

describe("tests", () => {
  it("should return users array", () => {
    const usersObj = {
      123: 'Juanito Alcachofa',
      456: 'Juanita Alcaparra',
    };
    const rta = solution(usersObj);
    expect(rta).toEqual([{ id: '123', name: 'Juanito Alcachofa' }, { id: '456', name: 'Juanita Alcaparra' }]);
  });

  it("should return food array", () => {
    const foodObj = {
      'a_55': 'Natilla',
      'b_45': 'Buñuelo',
    };
    const rta = solution(foodObj);
    expect(rta).toEqual([{ id: 'a_55', name: 'Natilla' }, { id: 'b_45', name: 'Buñuelo' }]);
  });
});
