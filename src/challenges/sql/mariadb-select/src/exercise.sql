-- Escribe tu código aquí 👇
SELECT estacion
FROM cdmx_metro
WHERE longitud_km > 6;

SELECT estacion
FROM cdmx_metro
WHERE inaugurada >= "2000-01-01";

SELECT AVG(longitud_km) AS longitud_promedio
FROM cdmx_metro;
