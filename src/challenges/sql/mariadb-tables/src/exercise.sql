-- Escribe tu ejercicio aquí 👇
ALTER TABLE asignaturas
ADD hora_de_entrega TIMESTAMP NOT NULL;

ALTER TABLE asignaturas
DROP hora_de_salida;

CREATE TABLE estudiantes (
  id INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  asignatura_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT asignatura_id_foreign
  FOREIGN KEY (asignatura_id) REFERENCES asignaturas
);

SELECT * FROM asignaturas;
SELECT * FROM estudiantes;
