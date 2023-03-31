CREATE TABLE cdmx_metro (
  id INTEGER PRIMARY KEY,
  estacion VARCHAR(255) NOT NULL,
  linea VARCHAR(255) NOT NULL,
  inaugurada TIMESTAMP NOT NULL,
  longitud_km FLOAT,
  estaciones_con_transbordo VARCHAR(255)
);

INSERT INTO cdmx_metro (estacion, linea, inaugurada, longitud_km, estaciones_con_transbordo)
VALUES
  ("Zocalo", "L2", "1969-04-22 00:00:00", 3.92, "Allende, Pino Suarez"),
  ("Polanco", "L7", "1984-08-20 00:00:00", 0.94, NULL),
  ("Lindavista", "L6", "1986-12-08 00:00:00", 4.12, "Instituto del Petróleo"),
  ("Apatlaco", "L8", "1994-07-20 00:00:00", 2.66, NULL),
  ("Etiopia", "L3", "1970-11-20 00:00:00", 3.09, "Centro Médico, Eugenia"),
  ("Tlahuac", "L12", "2012-10-30 00:00:00", 26.23, NULL),
  ("Cuatro Caminos", "L2", "1970-08-01 00:00:00", 7.98, "Panteones"),
  ("Mixcoac", "L12", "2012-10-30 00:00:00", 27.52, "Insurgentes Sur");


