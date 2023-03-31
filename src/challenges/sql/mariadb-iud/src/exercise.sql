-- Escribe tu código aquí 👇
INSERT INTO lines (id, name, color)
VALUES (7, "Nueva Linea 7", "Naranja");

UPDATE lines
SET name = "Linea 1"
WHERE id = 1;

DELETE FROM lines
WHERE id = 5;
