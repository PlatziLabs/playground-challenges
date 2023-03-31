-- pivot table
CREATE TABLE linea_estaciones (
  linea_id INTEGER NOT NULL,
  estacion_id INTEGER NOT NULL,
  FOREIGN KEY(linea_id) REFERENCES lineas(id),
  FOREIGN KEY(estacion_id) REFERENCES estaciones(id),
  PRIMARY KEY(linea_id, estacion_id)
);

-- nested select
INSERT INTO linea_estaciones (linea_id, estacion_id)
VALUES
(
  (
    SELECT id FROM lineas
    WHERE color = "Rojo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 1"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Rojo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 2"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Amarillo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 3"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Amarillo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 4"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Rojo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 5"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Amarillo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 6"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Azul"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 7"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Azul"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 8"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Azul"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 9"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Rojo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 10"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Amarillo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 11"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Rojo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 12"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Amarillo"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 13"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Azul"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 14"
  )
),
(
  (
    SELECT id FROM lineas
    WHERE color = "Azul"
  ),
  (
    SELECT id FROM estaciones
    WHERE nombre = "Estacion 15"
  )
);
