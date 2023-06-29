def filter_user_messages(messages, user):
<<<<<<< HEAD
  filtered_messages = filter(lambda msg: msg['sender'] == user, messages)
  return list(filtered_messages)

response = filter_user_messages([
  {'sender': 'Alice', 'content': 'Hola, ¿cómo estás?'},
  {'sender': 'Bob', 'content': '¡Bien, gracias!'},
  {'sender': 'Alice', 'content': '¿Quieres tomar un café?'},
  {'sender': 'Charlie', 'content': 'Hola a todos.'},
  {'sender': 'Alice', 'content': 'Nos vemos luego.'}
], "alice")

print(response)
=======
  # Tu código aquí 👈
  pass
>>>>>>> creational
