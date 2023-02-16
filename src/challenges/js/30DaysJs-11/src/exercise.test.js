import { sendEmail } from "./exercise";

describe("tests", () => {
  it("should call setTimeout with 2s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "Test Body";
    const rta = await sendEmail(email, subject, body);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(rta).toEqual({ email, subject, body });
  });

  it("should resolve with email information after 2 seconds", async () => {
    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "Test Body";
    const emailInfo = await sendEmail(email, subject, body);

    expect(emailInfo).toEqual({ email, subject, body });
  });

  it("should reject if email is missing", async () => {
    const email = "";
    const subject = "Test Subject";
    const body = "Test Body";

    await expect(sendEmail(email, subject, body)).rejects.toThrow();
  });

  it("should reject if subject is missing", async () => {
    const email = "user@example.com";
    const subject = "";
    const body = "Test Body";

    await expect(sendEmail(email, subject, body)).rejects.toThrow();
  });

  it("should reject if body is missing", async () => {
    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "";

    await expect(sendEmail(email, subject, body)).rejects.toThrow();
  });
});
