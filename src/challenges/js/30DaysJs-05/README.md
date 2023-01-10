En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

- `name`: nombre del gatito.
- `followers`: un array de números, donde cada uno representa los seguidores de cada red social.

Tu tarea es devolver un array con los nombres de los gatitos que tengan más seguidores.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```txt
Input: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

Output: ["Luna"]
```

Ejemplo 2:

```txt
Input: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

Output: ["Milo", "Gizmo"]
```
