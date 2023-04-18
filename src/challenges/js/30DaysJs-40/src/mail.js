export class Mail {
  constructor(from, to, body, subject) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.subject = subject;
    this.next = null;
  }
}
