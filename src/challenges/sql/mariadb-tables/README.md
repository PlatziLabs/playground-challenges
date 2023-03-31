En este desafío debes crear una tabla y alterar otra ya existente.

- ALTER

La tabla `asignaturas` tiene las columnas `id` (llave primaria), `titulo` y `hora_de_salida`. Debes eliminar la columna `hora_de_salida` y añadir una nueva llamada `hora_de_entrega` de tipo fecha y hora y sin permitir valores nulos.

Antes:

| id  | titulo | hora_de_salida |
|-----|--------|----------------|
| ... | ...    | ...            |

Después:

| id  | titulo | hora_de_entrega |
|-----|--------|-----------------|
| ... | ...    | ...             |

- CREATE

Crea una tabla `estudiantes` con las columnas `id` (llave primaria de tipo entero), `nombre` (de tipo `VARCHAR` con máximo 255 carácteres) y `asignatura_id` (llave foranea de tipo entero que haga referencia a la columna `id` de la tabla `asignaturas`).


| id  |  nombre  | asignatura_id |
|-----|----------|---------------|
| ... | ...      | ...           |
