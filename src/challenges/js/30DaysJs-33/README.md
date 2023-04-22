En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: 

- `map(func)` Itera por cada elemento de nuestra estructura aplicando la función a cada uno de ellos y devolviendo un nuevo array (debe ser una instancia de `MyArray`)
- `filter(func)` Itera por cada elemento de nuestra estructura filtrándolos según lo que indique la función y devuelve un array con los elementos filtrados (debe ser una instancia de `MyArray`)
- `join(character)` Concatena todos los elementos de nuestra estructura de datos en un string separándolos  por el carácter  indicado (en caso de no recibir un carácter, será una `,` por defecto)
- `push(item)` Agrega un item al final y aumenta el length
- `pop()` Elimina el último elemento y lo retorna, al igual que disminuye el length
- `shift()` Elimina el primer elemento y lo retorna, al igual que disminuye el length
- `unshift(item)` Agrega un elemento al inicio y aumenta el length

Además, deberás guardar los items dentro de la propiedad `data` y el número de elementos dentro de la propiedad `length` para poder consultarlos desde las pruebas.

Ejemplo 1:

```txt

Input:  

const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray.data)
console.log(myArray.length)

Output: 
{ 0: 1, 1: 2, 2: 3 }
3
```

Ejemplo 2:

```txt

Input:

const myArray = new MyArray()

myArray.push("Platzinauta");
myArray.unshift("Hola!")

console.log(myArray.data)

Output: { 0: "Hola!", 1: "Platzinauta" }

```
