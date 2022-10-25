import { delay } from "./exercise";

describe('tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello' after 2s", async () => {
    const rta = await delay(2000, 'Hello');
    expect(rta).toBe("Hello");
  });

  it("should call setTimeout with 2s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const rta = await delay(2000, 'Hello');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(rta).toBe("Hello");
  });

  it("should call setTimeout with 3s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const rta = await delay(3000, 'Hello 3');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    expect(rta).toBe("Hello 3");
  });
});
