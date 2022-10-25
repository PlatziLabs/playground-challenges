import { getId } from "./exercise";

describe("tests", () => {

  it("should return different id", () => {

    const ids = [];
    let isRepeated = false;
    const genId = getId()

    for (let i = 0; i < 20; i++) {

      const id = genId.next().value;
      
      if (ids.includes(id)) {
        isRepeated = true;
        break;
      }

      ids.push(id);
      
    }

    expect(isRepeated).toBe(false);

  });

  it("should be a generator", () => {

    const genId = getId();
    const hasNextMethod = genId.next != undefined;
    expect(hasNextMethod).toBeTruthy();

    const next = genId.next();
    const hasValueProperty = next.value != undefined;
    expect(hasValueProperty).toBeTruthy();

  });

});
