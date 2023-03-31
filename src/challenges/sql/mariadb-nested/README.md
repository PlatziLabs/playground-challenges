Por tu gran trabajo en el metro de CDMX la alcaldía de Bogotá te contrató para trabajar en las bases de datos del Metro de Bogotá.

Las tablas y registros de `estaciones` y `lineas` ya fueron creados:

- Tabla `estaciones`:

| id | nombre | longitud_km | inaguracion |
|:--:|:------:|:-----------:|:-----------:|
| ... | ... | ... | ... |

- Tabla `lineas`:

| id | nombre | color |
|:--:|:------:|:-----:|
| ... | ... | ... |

Pero falta conectar cada estación con su respectiva línea. Para eso debes crear una tabla pivote `linea_estaciones` con las propiedades `linea_id` y `estacion_id`.

- Tabla `linea_estaciones`:

| linea_id | estacion_id |
|:--------:|:-----------:|
| ... | ... |

Puedes conectar las estaciones con las lineas que prefieras, pero asegúrate de que cada linea tenga al menos 5 estaciones.

> 💡 Para esta tarea puedes agregar los valores manualmente o usar consultas anidadas.
