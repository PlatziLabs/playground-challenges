-- create the lines table
CREATE TABLE lineas (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    color TEXT NOT NULL
);
INSERT INTO lineas (id, nombre, color)
VALUES 
  (1, 'Linea 1', 'Amarillo'),
  (2, 'Linea 2', 'Azul'),
  (3, 'Linea 3', 'Rojo');

-- create the stations table
CREATE TABLE estaciones (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    longitud_km REAL NOT NULL,
    inaguracion DATE NOT NULL
);
INSERT INTO estaciones (id, nombre, longitud_km, inaguracion)
VALUES 
  (1, 'Estacion 1', 2.5, '2025-06-12'),
  (2, 'Estacion 2', 3.2, '2024-05-23'),
  (3, 'Estacion 3', 1.8, '2026-09-08'),
  (4, 'Estacion 4', 4.1, '2025-12-01'),
  (5, 'Estacion 5', 2.9, '2027-03-19'),
  (6, 'Estacion 6', 5.2, '2026-07-15'),
  (7, 'Estacion 7', 1.5, '2027-11-27'),
  (8, 'Estacion 8', 2.8, '2024-10-02'),
  (9, 'Estacion 9', 3.7, '2026-04-18'),
  (10, 'Estacion 10', 4.4, '2024-08-30'),
  (11, 'Estacion 11', 2.3, '2025-11-04'),
  (12, 'Estacion 12', 1.9, '2024-02-14'),
  (13, 'Estacion 13', 3.1, '2026-01-09'),
  (14, 'Estacion 14', 5.6, '2025-10-28'),
  (15, 'Estacion 15', 2.1, '2027-08-11');
