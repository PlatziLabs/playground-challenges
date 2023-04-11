import { Queue } from "./exercise";

describe("Tests", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should enqueue emails", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    expect(queue.size()).toBe(1);
    expect(queue.peek().from).toBe("user1@example.com");
    expect(queue.peek().to).toBe("support@example.com");
    expect(queue.peek().body).toBe("Body 1");
    expect(queue.peek().subject).toBe("Subject 1");
  });

  it("should dequeue emails", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    const removedMail = queue.dequeue();
    expect(removedMail.from).toBe("user1@example.com");
    expect(removedMail.to).toBe("support@example.com");
    expect(removedMail.body).toBe("Body 1");
    expect(removedMail.subject).toBe("Subject 1");

    expect(queue.size()).toBe(2);
    expect(queue.peek().from).toBe("user2@example.com");
    expect(queue.peek().to).toBe("support@example.com");
    expect(queue.peek().body).toBe("Body 2");
    expect(queue.peek().subject).toBe("Subject 2");
  });

  it("should throw an error when dequeue from an empty queue", () => {
    expect(() => {
      queue.dequeue();
    }).toThrow();
  });

  it("should peek the first email", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    const peekedMail = queue.peek();
    expect(peekedMail.from).toBe("user1@example.com");
    expect(peekedMail.to).toBe("support@example.com");
    expect(peekedMail.body).toBe("Body 1");
    expect(peekedMail.subject).toBe("Subject 1");
  });

  it("should return the size of the queue", () => {
    queue.enqueue(
      "user1@example.com",
      "support@example.com",
      "Body 1",
      "Subject 1"
    );
    queue.enqueue(
      "user2@example.com",
      "support@example.com",
      "Body 2",
      "Subject 2"
    );
    queue.enqueue(
      "user3@example.com",
      "support@example.com",
      "Body 3",
      "Subject 3"
    );

    expect(queue.size()).toBe(3);
  });
});
