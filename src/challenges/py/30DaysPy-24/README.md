Tu objetivo es crear una clase llamada `MyList` que simule el comportamiento de una Lista nativa en Python, sin utilizar los métodos ya existentes. Implementarás la lógica de los siguientes métodos:

- `map(func)`: itera sobre cada elemento de nuestra estructura aplicando la función func a cada uno de ellos y devuelve una nueva lista (que será una instancia de `MyList`).

- `filter(func)`: itera sobre cada elemento de nuestra estructura filtrándolos según lo que indique la función func y devuelve una lista con los elementos filtrados (también una instancia de MyList).

- `join(character)`: concatena todos los elementos de nuestra estructura de datos en un string, separándolos por el carácter indicado (character). Si no se proporciona un carácter, el separador por defecto será una coma ",".

- `append(item)`: agrega un elemento item al final de la lista y aumenta la longitud (length).

- `pop()`: elimina el último elemento de la lista y lo retorna, disminuyendo también la longitud (length).

- `shift()`: elimina el primer elemento de la lista y lo retorna, disminuyendo la longitud (length).

- `unshift(item)`: agrega un elemento item al inicio de la lista y aumenta la longitud (length).

Además, deberás almacenar los elementos dentro de la propiedad `data` y el número de elementos dentro de la propiedad `length`, para que puedan ser consultados desde las pruebas.

Ejemplo 1:

```txt
Input:

myList = MyList()
myList.append("a")
myList.append("b")
myList.append("c")

print(myList.data)

Output:

{0: 1, 1: 2, 2: 3}

```

Ejemplo 2:

```txt
Input:

myList = MyList()
myList.append("Platzinauta")
myList.unshift("Hola!")

print(myArray.data)

Output:
{0: "Hola!", 1: "Platzinauta"}

```