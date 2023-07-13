from main import Queue

def test_enqueue_emails():
  queue = Queue()
  
  queue.enqueue(
    "user1@example.com",
    "support@example.com",
    "Body 1",
    "Subject 1"
  )
  
  assert queue.size() == 1
  assert queue.peek().from_email == "user1@example.com"
  assert queue.peek().to == "support@example.com"
  assert queue.peek().body == "Body 1"
  assert queue.peek().subject == "Subject 1"

def test_dequeue_emails():
  queue = Queue()

  queue.enqueue(
    "user1@example.com",
    "support@example.com",
    "Body 1",
    "Subject 1"
  )
  queue.enqueue(
    "user2@example.com",
    "support@example.com",
    "Body 2",
    "Subject 2"
  )
  queue.enqueue(
    "user3@example.com",
    "support@example.com",
    "Body 3",
    "Subject 3"
  )

  removed_mail = queue.dequeue()
  assert removed_mail.from_email == "user1@example.com"
  assert removed_mail.to == "support@example.com"
  assert removed_mail.body == "Body 1"
  assert removed_mail.subject == "Subject 1"

  assert queue.size() == 2
  assert queue.peek().from_email == "user2@example.com"
  assert queue.peek().to == "support@example.com"
  assert queue.peek().body == "Body 2"
  assert queue.peek().subject == "Subject 2"

def test_dequeue_from_empty_queue():
  queue = Queue()

  try:
    queue.dequeue()
    assert False, "Expected an exception to be thrown"
  except IndexError:
    assert True

def test_peek_first_email():
  queue = Queue()

  queue.enqueue(
    "user1@example.com",
    "support@example.com",
    "Body 1",
    "Subject 1"
  )
  queue.enqueue(
    "user2@example.com",
    "support@example.com",
    "Body 2",
    "Subject 2"
  )
  queue.enqueue(
    "user3@example.com",
    "support@example.com",
    "Body 3",
    "Subject 3"
  )

  peeked_mail = queue.peek()
  assert peeked_mail.from_email == "user1@example.com"
  assert peeked_mail.to == "support@example.com"
  assert peeked_mail.body == "Body 1"
  assert peeked_mail.subject == "Subject 1"

def test_queue_size():
  queue = Queue()

  queue.enqueue(
    "user1@example.com",
    "support@example.com",
    "Body 1",
    "Subject 1"
  )
  queue.enqueue(
    "user2@example.com",
    "support@example.com",
    "Body 2",
    "Subject 2"
  )
  queue.enqueue(
    "user3@example.com",
    "support@example.com",
    "Body 3",
    "Subject 3"
  )

  assert queue.size() == 3
