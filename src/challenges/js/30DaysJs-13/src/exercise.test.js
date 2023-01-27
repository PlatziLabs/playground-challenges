import { validateForm } from "./exercise";

describe("tests", () => {
  const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456",
  };

  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ];

  it("should add a new user to the array", () => {
    const rta = validateForm(formData, registeredUsers);
    expect(typeof rta).toBe("string");
    expect(registeredUsers).toEqual([
      { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
      { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
      { name: "Juan", lastname: "Perez", email: "juan@example.com" },
    ]);
  });

  it("should return a string when add a new user", () => {
    const formData = {
      name: "Juan",
      lastname: "Perez",
      email: "juan123@example.com",
      password: "123456",
    };

    const rta = validateForm(formData, registeredUsers);
    expect(typeof rta).toBe("string");
  });

  it("should throw an error if the user exists", () => {
    expect(() => validateForm(formData, registeredUsers)).toThrow();
  });

  it("should throw an error if fields are needed", () => {
    delete formData.email;
    expect(() => validateForm(formData, registeredUsers)).toThrow();
  });
});
