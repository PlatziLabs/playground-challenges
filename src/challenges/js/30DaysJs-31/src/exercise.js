export class Newsletter {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(email) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.email !== email
    );
  }

  post(article) {
    this.subscribers.forEach((subscriber) => subscriber.receive(article));
  }
}

