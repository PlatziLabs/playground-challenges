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

export class Subscriber {
  constructor(email) {
    this.articles = [];
    this.email = email;
  }

  receive(article) {
    this.articles.push(article);
    console.log(
      `El suscriptor ${this.email} ha recibido el artículo: ${article.title}`
    );
  }
}
