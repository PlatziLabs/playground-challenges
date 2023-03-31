Para resolver este desafío debes **contar la cantidad de reviews** de todos los cursos **de un mismo profesor** y **ordenarlos de forma descendente**.

- Vas a recibir 2 tablas: `courses` (con los campos `id`, `name`, `n_reviews` y `teacher_id`) y `teacher` (con los campos `id` y `name`).
- Un mismo profesor puede estar asignado a múltiples cursos.
- Por cada profesor con cursos asociados debes sumar la cantidad total de reviews de todos sus cursos.
- Debes imprimir el nombre del profesor en una columna `teacher` y la suma total de sus reviews en una columna `total_reviews`.
- Finalmente debes ordenar la agrupación de profesores y su cantidad total de reviews usando su propiedad `total_reviews` de forma descendente.
- No debes contar profesores sin cursos asociados ni cursos sin al menos 1 review.


Tabla courses:

| id  |     name     | n_reviews | teacher_id |
|-----|--------------|----------:|-----------:|
|  1  | Curso de SQL |       100 |          1 |
| ... |     ...      |       ... |        ... |

Tabla teachers:

| id  |     name     |
|-----|--------------|
|  1  |    Israel    |
| ... |      ...     |

Resultado esperado:

| teacher | total_reviews |
|---------|--------------:|
| Israel  |           100 |
|   ...   |           ... |
