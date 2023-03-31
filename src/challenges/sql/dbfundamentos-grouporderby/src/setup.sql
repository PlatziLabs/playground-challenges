CREATE TABLE courses (id int, name varchar(255), n_reviews int, teacher_id int);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (100, "Fundamentos de Bases de Datos", 1400, 1);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (200, "Curso de MySQL y MariaDB", 400, NULL);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (260, "Curso de Data Science", 320, 8);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (350, "Curso de Firebase", 150, 1);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (749, "Curso de Python", 2300, 8);

INSERT INTO courses (id, name, n_reviews, teacher_id)
VALUES (750, "Curso de React.js", 1500, 16);


CREATE TABLE teachers (id int, name varchar(255));

INSERT INTO teachers (id, name)
VALUES (1, "Israel");

INSERT INTO teachers (id, name)
VALUES (8, "Silvia");

INSERT INTO teachers (id, name)
VALUES (16, "Leomaris");

INSERT INTO teachers (id, name)
VALUES (25, "Juan");
