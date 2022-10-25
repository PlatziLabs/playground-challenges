import { runCode } from "./exercise";
import { doTask1, doTask2, doTask3 } from "./tasks";

describe('tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a array with 3 elements", async () => {
    const rta = await runCode();
    expect(rta.length).toBe(3);
    expect(rta[0]).toBe('Task 1');
    expect(rta[1]).toBe('Task 2');
    expect(rta[2]).toBe('Task 3');
  });

  it("should call setTimeout 3 times", async () => {
    const spy = jest.spyOn(global, "setTimeout");
    const rta = await runCode();
    expect(rta.length).toBe(3);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it("should doTask1, doTask2, doTask3 be a Promise", async () => {
    await runCode();
    expect(doTask1()).toBeInstanceOf(Promise);
    expect(doTask2()).toBeInstanceOf(Promise);
    expect(doTask3()).toBeInstanceOf(Promise);
  });

});
