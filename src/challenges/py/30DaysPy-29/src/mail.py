class Mail:
  def __init__(self, from_email, to, body, subject):
    self.from_email = from_email
    self.to = to
    self.body = body
    self.subject = subject
    self.next = None