En este ejercicio, debes implementar la lógica para procesar correos electrónicos en una empresa utilizando una queue, donde los correos más antiguos tienen prioridad. Para ello, deberás crear una clase llamada `Queue` para representar la cola de correos electrónicos. La clase debe tener los siguientes métodos:

- `enqueue(from, to, body, subject)`: Agrega un correo electrónico al final de la cola.
- `dequeue()`: Elimina y devuelve un objeto con las siguientes propiedades: { from, to, body, subject } del correo electrónico más antiguo de la cola.
- `peek()`: Devuelve el correo electrónico más antiguo de la cola sin eliminarlo.
- `size()`: Devuelve la cantidad de correos electrónicos en la cola.

Tendrás una clase Mail ya construida para usarla dentro del desarrollo de tu solución que simulará ser un nodo dentro de la queue.

Ejemplo:

```txt
Input:
emailQueue = Queue()

emailQueue.enqueue(
    'jane@ejemplo.com',
    'support@ejemplo.com',
    'No puedo iniciar sesión en mi cuenta',
    'Problema de inicio de sesión'
)

emailQueue.enqueue(
    'joe@ejemplo.com',
    'support@ejemplo.com',
    'Mi pedido no ha llegado todavía',
    'Estado del pedido'
)

email = emailQueue.dequeue()
print(email)

Output:
{
  'from': 'jane@ejemplo.com',
  'to': 'support@ejemplo.com',
  'body': 'No puedo iniciar sesión en mi cuenta',
  'subject': 'Problema de inicio de sesión'
}
```