-- Escribe aquí tu código SQL 👇
SELECT * FROM students;

INSERT INTO students
(nombre, apellido, edad, correo_electronico, telefono)
VALUES ("Alexis", "Araujo", 33, "alexis@gmail.com", "777-1234");

DELETE FROM students where id = 1;

UPDATE students
SET correo_electronico = "alexis@gmail.com"
WHERE id = 2;
