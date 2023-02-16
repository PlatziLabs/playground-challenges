import { countNumbers } from "./exercise";

describe("tests", () => {
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should count from 1 to 3 and call the callback with each number", () => {
    countNumbers(3, callback);

    expect(callback).not.toBeCalled();

    jest.runOnlyPendingTimers();
    expect(callback).toBeCalledWith(1);

    jest.runOnlyPendingTimers();
    expect(callback).toBeCalledWith(2);

    jest.runOnlyPendingTimers();
    expect(callback).toBeCalledWith(3);

    jest.runOnlyPendingTimers();
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("should stop counting when n is 0", () => {
    countNumbers(0, callback);

    jest.runOnlyPendingTimers();
    expect(callback).not.toBeCalled();
  });
});
