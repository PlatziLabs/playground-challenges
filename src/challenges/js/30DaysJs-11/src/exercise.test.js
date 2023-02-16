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

    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalledWith(1);

    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalledWith(2);

    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalledWith(3);

    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("should stop counting when n is 0", () => {
    countNumbers(0, callback);

    jest.advanceTimersByTime(1000);
    expect(callback).not.toBeCalled();
  });
});
