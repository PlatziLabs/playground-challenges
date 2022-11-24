Tienes un diccionario con diferentes keys y values, tu desafío es modificar el diccionario según las listas de nombres que recibas y retornarlo con los values actualizados.

- 'school' Este valor siempre debe ser **"Platzi"**
- 'names' Aquí pondrás la **lista de nombres** que recibas
- 'first_student' Aquí retornarás el **primer** nombre de la lista
- 'last_student' Aquí retornarás el **último** nombre de la lista
- 'count' Aquí retornarás el **número total** de nombres de la lista

Tu solución debería tener un input y output como los siguientes:

Ejemplo 1

```py

Input: ["Pepe", "Luis"]

Output: {
  'school': "Platzi",
  'names': ["Pepe", "Luis"],
  'first_student': "Pepe",
  'last_student': "Luis",
  'count': 2
}

```

Ejemplo 2

```py
Input: ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"]

Output: {
  'school': "Platzi",
  'names': ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"],
  'first_student': "Pedro",
  'last_student': "Saul",
  'count': 6
}

```