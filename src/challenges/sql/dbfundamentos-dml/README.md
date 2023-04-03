El CRUD (acrónimo de "Create, Read, Update, Delete") es un conjunto de operaciones básicas que se realizan en cualquier sistema de gestión de bases de datos.

En este caso, el reto consiste en realizar las operaciones **CRUD** en la tabla "students" y estara compuesto por 4 retos.

Recuerda que debes imprimir los siguientes 4 bloques de información, de cada reto, en la consola:

Información de la tabla:

- La tabla `students` tiene 4 columnas: `nombre`, `apellido`, `edad`, `correo_electronico`, `telefono`.

1.- Tu reto será escribir una consulta `SELECT` que devuelva todos los datos de la tabla `students`.
Con esta consulta, podrás ver cómo se utiliza la sintaxis SELECT para recuperar información de una base de datos utilizando SQL.

> 💡 Recuerda que puedes usar el comando `SELECT *` para seleccionar todas las columnas de una tabla.

2.- Tu reto será escribir una consulta `INSERT` que inserte un nuevo registro en la tabla `students`, el registro a insertar debe incluir los siguientes valores.

- `nombre`: "Alexis"
- `apellido`: "Araujo"
- `edad`: 33
- `correo_electronico`: "alexis@gmail.com"
- `telefono`: 777-1234

Con esta consulta, podrás ver cómo se utiliza la sintaxis INSERT para insertar un nuevo registro en una tabla.

> 💡 Recuerda que puedes usar el comando `INSERT INTO` para insertar un nuevo registro en una tabla.
> Para ejecutar una consulta `INSERT` lo puedes hacer de la siguiente manera:
```sql
INSERT INTO table (column1,column2 ,..)
VALUES( value1,	value2 ,...);
```

3.- Tu reto será escribir una consulta `DELETE` que elimine el registro con el `id` "1" en la tabla `students`.

Con esta consulta, podrás ver cómo se utiliza la sintaxis DELETE para eliminar un registro en una tabla.

> 💡 Recuerda que puedes usar el comando `DELETE FROM` para eliminar un registro en una tabla.
> Para ejecutar una consulta `DELETE` lo puedes hacer de la siguiente manera:
```sql
DELETE FROM table
WHERE condition;
```

4.- Tu reto será escribir una consulta `UPDATE` que actualice el registro con el `id` "2" en la tabla `students`, el registro a actualizar debe incluir los siguientes valores.

- `correo_electronico`: "nuevo_correo@gmail.com"

Con esta consulta, podrás ver cómo se utiliza la sintaxis UPDATE para actualizar un registro en una tabla.

> 💡 Recuerda que puedes usar el comando `UPDATE` para actualizar un registro en una tabla.
> Para ejecutar una consulta `UPDATE` lo puedes hacer de la siguiente manera:
```sql
UPDATE table
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
