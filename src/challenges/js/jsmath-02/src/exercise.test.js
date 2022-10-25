import { solution } from "./exercise";

describe("tests", () => {
  it("should return Juanita", () => {
    const id = 456;
    const users = [];
    users.push({ id: 123, name: 'Juanito Alcachofa' });
    users.push({ id: 456, name: 'Juanita Alcaparra' });

    const rta = solution(users, id);
    expect(rta).toEqual('Juanita Alcaparra');
  });

  it("should return false", () => {
    const id = 999;
    const users = [];
    users.push({ id: 123, name: 'Juanito Alcachofa' });
    users.push({ id: 456, name: 'Juanita Alcaparra' });

    const rta = solution(users, id);
    expect(rta).toEqual(false);
  });
});
