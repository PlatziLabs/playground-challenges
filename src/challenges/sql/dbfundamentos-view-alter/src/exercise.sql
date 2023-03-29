-- Escribe aquí tu código SQL 👇
CREATE VIEW v_customers AS
SELECT person_id, last_name, first_name
FROM people
WHERE city = 'Madrid';

SELECT * FROM v_customers;

ALTER TABLE people
ADD COLUMN date_of_birth DATE;

ALTER TABLE people
DROP COLUMN address;