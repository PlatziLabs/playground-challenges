En este desafío, se te ha dado un diccionario con diferentes keys y values. Tu reto es implementar una función llamada `dictionary_with_lists` que modifique el diccionario según las listas de nombres que reciba y retorne el diccionario con los values actualizados de acuerdo a lo siguiente:

- 'school' debe siempre tener el valor de "Platzi".
- 'names' debe contener la lista de nombres que recibas.
- 'first_student' debe contener el primer nombre de la lista.
- 'last_student' debe contener el último nombre de la lista.
- 'count' debe contener el número total de nombres en la lista.

Tu solución debe cumplir con estos requerimientos y retornar el diccionario con los values actualizados de acuerdo a la lista de nombres que recibas.

Ejemplo 1:

```txt

Input: ["Pepe", "Luis"]

Output: {
  'school': "Platzi",
  'names': ["Pepe", "Luis"],
  'first_student': "Pepe",
  'last_student': "Luis",
  'count': 2
}

```

Ejemplo 2:

```txt
Input: ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"]

Output: {
  'school': "Platzi",
  'names': ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"],
  'first_student': "Pedro",
  'last_student': "Saul",
  'count': 6
}

```

Ejemplo 3:

```txt

Input: ["Pepe"]

Output: {
  'school': "Platzi",
  'names': ["Pepe"],
  'first_student': "Pepe",
  'last_student': "Pepe",
  'count': 1
}

```
