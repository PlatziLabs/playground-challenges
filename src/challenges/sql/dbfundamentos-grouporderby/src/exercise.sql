-- Escribe tu código aquí 👇

SELECT
  teachers.name AS teacher,
  SUM(courses.n_reviews) AS total_reviews
FROM courses
LEFT JOIN
  teachers ON courses.teacher_id = teachers.id
WHERE
  courses.teacher_id IS NOT NULL
GROUP BY teachers.name
ORDER BY total_reviews DESC;

