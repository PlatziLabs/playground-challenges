Para resolver este desafío debes escribir una consulta a la base de datos para encontrar a todos los **cursos con profe asociado**.

Información de las tablas:

- Las y los profes se encuentran en la tabla `teachers`.
- Los cursos se encuentran en la tabla `courses`.
- Cada curso y profe tiene su llave primaria en la columna `id`.
- Cada profe puede tener la llave foránea de su curso asociado en la columna `course_id`.
- Cada curso puede tener la llave foránea de su profe asociado en la columna `teacher_id`.

Propiedades a imprimir en la consulta:

- `id` (con el id del curso)
- `name` (con el nombre del curso)
- `teacher_id` (con el id del profe)
- `teacher_name` (con el nombre del profe).

> :bulb: En clases anteriores aprendiste a usar la instrucción `AS` para renombrar columnas en tus queries. Para renombrar columnas en consultas entre varias tablas puedes usar nombre_de_tabla.nombre_de_propidad (e.j. `SELECT courses.id AS id FROM ...`).

Validaciones para el query:

- Selecciona únicamente los cursos que tengan profe asociado en la columna `teacher_id`.
- No tengas en cuenta si el profesor tiene curso asociado, únicamente si el curso tiene profesor asociado.
