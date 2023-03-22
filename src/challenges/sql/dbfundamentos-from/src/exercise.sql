SELECT
  courses.id AS id,
  courses.name AS name,
  courses.teacher_id AS teacher_id,
  teachers.name AS teacher_name
FROM courses
LEFT JOIN teachers ON courses.teacher_id = teachers.id
WHERE courses.teacher_id IS NOT NULL;
