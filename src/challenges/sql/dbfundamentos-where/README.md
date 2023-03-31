Para resolver este ejercicio debes crear 3 sentencias SELECT:

- La primera seleccionando todos los cursos de la tabla `courses` con al menos 1 review (en la columna `n_reviews`).
- La segunda seleccionando todos los cursos de la tabla `courses` con entre 1 y 100 reviews (también en la columna `n_reviews`).
- La tercera seleccionando la propiedad `name` de todos los cursos de la tabla `courses` con la palabra "SQL" en alguna parte de su nombre.

Tabla inicial:

| id  |     name     | n_reviews |
|-----|--------------|----------:|
|  1  | Curso de SQL |         0 |
|  2  | Curso de R   |        10 |
| ... | ...          |       ... |

Selección de los cursos con al menos 1 review:

| id  |     name     | n_reviews |
|-----|--------------|----------:|
|  2  | Curso de R   |        10 |
| ... | ...          |       ... |

Selección de los cursos con entre 1 y 100 reviews:

| id  |     name     | n_reviews |
|-----|--------------|----------:|
|  2  | Curso de R   |        10 |
| ... | ...          |       ... |

Selección de los cursos con "SQL" en alguna parte de su nombre:

| id  |     name     | n_reviews |
|-----|--------------|----------:|
|  2  | Curso de SQL |         0 |
| ... | ...          |       ... |
