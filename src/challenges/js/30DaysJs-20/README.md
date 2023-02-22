En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

Esto implica agregar un nuevo método llamado myFilter al `prototype` de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:

Ejemplo 1:

```txt

Input:

const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)

Output: [2,4,6]

```

Ejemplo 2:

```txt

Input:

const arr = [
  {
    name: "Juan",
    age: 10,
  },
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
];

array.myFilter((person) => person.age > 18)

Output: [
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
]

```
