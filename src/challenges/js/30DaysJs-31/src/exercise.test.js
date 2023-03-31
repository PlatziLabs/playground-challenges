import { Newsletter } from "./exercise";
import { Subscriber } from "./Subscriber";

describe("tests", () => {
  let newsletter;

  beforeEach(() => {
    newsletter = new Newsletter();
  });

  it("should not has subscribers", () => {
    expect(newsletter.subscribers).toEqual([]);
  });

  it("should can add a subscriber", () => {
    const subscriber = new Subscriber("leo@example.com");
    newsletter.subscribe(subscriber);
    expect(newsletter.subscribers).toContain(subscriber);
  });

  it("should can remove a subscriber", () => {
    const subscriber = new Subscriber("email@example.com");
    newsletter.subscribe(subscriber);
    newsletter.unsubscribe("email@example.com");
    expect(newsletter.subscribers).not.toContain(subscriber);
  });

  it("should send an article to all subscribers", () => {
    const subscriber = new Subscriber("email@example.com");
    const spy = jest.spyOn(subscriber, "receive");
    newsletter.subscribe(subscriber);
    newsletter.post({ title: "Título de prueba" });
    expect(spy).toHaveBeenCalledWith({ title: "Título de prueba" });
  });

  it("should can receive an email", () => {
    const subscriber = new Subscriber("email@example.com");
    const spy = jest.spyOn(console, "log");
    subscriber.receive({ title: "Título de prueba" });
    expect(spy).toHaveBeenCalled();
  });
});
