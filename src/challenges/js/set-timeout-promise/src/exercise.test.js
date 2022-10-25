import { runCode } from "./exercise";

describe('tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello, World!' before 2s", async () => {
    const rta = await runCode();
    expect(rta).toBe("Hello, World!");
  });

  it("should call setTimeout with 2s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const rta = await runCode();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(rta).toBe("Hello, World!");
  });
});
