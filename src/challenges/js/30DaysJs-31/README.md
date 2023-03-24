En este desafío, debes implementar un patrón observer en un sistema de newsletter.

Tendrás que crear una clase `Newsletter` que gestione la suscripción de los usuarios a un newsletter y envíe actualizaciones cuando se publique un nuevo artículo. La clase tendrá una lista de suscriptores (`subscribers`)inicializada, y los siguientes métodos: `subscribe(subscriber)` para agregar nuevos suscriptores, `unsubscribe(email)` para eliminar a un suscriptor de la lista mediante su correo electrónico, y `post(article)` que recibirá un objeto con dos propiedades: `title` y `content`.

Además, necesitarás crear la clase `Subscriber`, la cual se inicializará con un correo electrónico y un método `receive(article)` que **imprimirá en consola** un mensaje que indica que el suscriptor ha recibido un artículo específico.

Ejemplo

```txt

Input:

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);

Output:
"El suscriptor pepe@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor juanito@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor pedro@mail.com ha recibido el artículo: 30 días de js"

```
