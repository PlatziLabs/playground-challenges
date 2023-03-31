Debes crear una tabla de datos que permita almacenar información sobre personas. La tabla tendrá cinco campos: person_id, last_name, first_name, address, y city.

- La columna `person_id` debe ser de tipo entero y debe la llave primaria de la tabla y debe ser autoincremental y recuerda no permitir valores NULOS.
- La columna `last_name` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `first_name` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `address` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.
- La columna `city` debe ser de tipo texto y debe tener un tamaño máximo de 255 caracteres y permita valores NULOS.

> Cualquier tabla puedes crearla de la siguiente manera:

```sql
CREATE TABLE IF NOT EXISTS "albums"
(
    [AlbumId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Title] NVARCHAR(160)  NOT NULL,
    [ArtistId] INTEGER  NOT NULL
);
```
