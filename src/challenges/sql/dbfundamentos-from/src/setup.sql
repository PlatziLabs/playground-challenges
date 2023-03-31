CREATE TABLE courses (id int,name varchar(255), teacher_id int);
INSERT INTO courses (id, name, teacher_id) VALUES (100, "Fundamentos de Bases de Datos", 1);
INSERT INTO courses (id, name, teacher_id) VALUES (200, "Curso de MySQL y MariaDB", NULL);
INSERT INTO courses (id, name, teacher_id) VALUES (260, "Curso de Data Science", 8);
INSERT INTO courses (id, name, teacher_id) VALUES (350, "Curso de Firebase", 16);
INSERT INTO courses (id, name, teacher_id) VALUES (749, "Curso de Python", 30);
INSERT INTO courses (id, name, teacher_id) VALUES (750, "Curso de React.js", NULL);

CREATE TABLE teachers (id int,name varchar(255), course_id int);
INSERT INTO teachers (id, name, course_id) VALUES (1, "Israel", 100);
INSERT INTO teachers (id, name, course_id) VALUES (5, "Carlos", NULL);
INSERT INTO teachers (id, name, course_id) VALUES (8, "Silvia", 260);
INSERT INTO teachers (id, name, course_id) VALUES (16, "Leomaris", 350);
INSERT INTO teachers (id, name, course_id) VALUES (30, "Nico", 749);
INSERT INTO teachers (id, name, course_id) VALUES (31, "Juan", 750);
