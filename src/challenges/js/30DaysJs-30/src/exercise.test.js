import { MessagesProxy } from "./exercise";
import { User } from "./User";
import { Messages } from "./messages";

describe("tests", () => {
  let messages, messagesProxy, user;

  beforeEach(() => {
    messages = new Messages();
    user = new User("John");
    messagesProxy = new MessagesProxy(messages, user);
  });

  it("should add a message to history when user is logged in", () => {
    user.login();
    messagesProxy.sendMessage("Hola");
    expect(messagesProxy.getHistory().length).toBe(1);
    expect(messagesProxy.getHistory()[0]).toBe("Hola");
  });

  it("should throw an error when user is not logged in", () => {
    expect(() => messagesProxy.sendMessage("Hola")).toThrow();
    expect(() => messagesProxy.getHistory()).toThrow();
  });

  it("should return the message history when user is logged in", () => {
    user.login();
    messagesProxy.sendMessage("Hola");
    messagesProxy.sendMessage("Adiós");
    expect(messagesProxy.getHistory().length).toBe(2);
    expect(messagesProxy.getHistory()[0]).toBe("Hola");
    expect(messagesProxy.getHistory()[1]).toBe("Adiós");
  });

  it("should throw an error when user is not logged in", () => {
    expect(() => messagesProxy.getHistory()).toThrow();
  });

  it("should set loggedIn to true when logging in", () => {
    user.login();
    expect(user.isLoggedIn()).toBe(true);
  });

  it("should set loggedIn to false when logging out", () => {
    user.login();
    user.logout();
    expect(user.isLoggedIn()).toBe(false);
  });
});
