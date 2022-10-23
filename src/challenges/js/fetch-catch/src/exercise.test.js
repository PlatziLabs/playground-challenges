import { runCode } from "./exercise";

describe("tests", () => {
  it("should throw an error", async () => {
    let thrownError;
    try {
      await runCode();
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('API Not Found');
  });
});
