-- Escribe tu código aquí 👇
SELECT *
FROM COURSES
WHERE n_reviews > 0;

SELECT *
FROM COURSES
WHERE n_reviews BETWEEN 1 AND 100;

SELECT name
FROM COURSES
WHERE name LIKE "%SQL%";
