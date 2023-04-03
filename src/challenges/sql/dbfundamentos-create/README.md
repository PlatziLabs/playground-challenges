Debes crear una tabla de datos que permita almacenar información sobre personas, llamada `people`. La tabla tendrá cinco campos: person_id, last_name, first_name, address, y city.

- La columna `person_id` debe ser de tipo entero y debe la llave primaria de la tabla y debe ser autoincremental y recuerda no permitir valores NULOS.
- La columna `last_name` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `first_name` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `address` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `city` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.

> Cualquier tabla puedes crearla de la siguiente manera:

```sql
CREATE TABLE COMPANY(
   ID INT PRIMARY KEY AUTOINCREMENT NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```
