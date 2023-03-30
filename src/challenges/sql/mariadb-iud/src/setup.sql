CREATE TABLE lines (
  id BIGINT(20) NOT NULL,
  name VARCHAR(10) NOT NULL,
  color VARCHAR(15) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO lines (id, name, color) VALUES
(1, "Linea con nombre incorrecto", "Rojo"),
(2, "Linea 2", "Azul"),
(3, "Linea 3", "Amarilla"),
(4, "Linea 4", "Celeste"),
(5, "Linea que ya no existe", "Gris"),
(6, "Linea 6", "Verde");
