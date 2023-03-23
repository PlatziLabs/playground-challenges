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
