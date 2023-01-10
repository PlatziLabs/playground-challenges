export function getStudentAverage(students) {
  let classAverage = 0;

  for (const student of students) {
    classAverage +=
      student.grades.reduce(
        (studentAverage, currentGrade) => studentAverage + currentGrade,
        0
      ) / student.grades.length;
  }

  classAverage = classAverage / students.length;
  classAverage = Number(classAverage.toFixed(2));

  const studentsWithAverage = students.map((student) => {
    let average =
      student.grades.reduce(
        (studentAverage, currentGrade) => studentAverage + currentGrade,
        0
      ) / student.grades.length;
    average = Number(average.toFixed(2));
    return {
      name: student.name,
      average,
    };
  });

  return {
    classAverage,
    students: studentsWithAverage,
  };
}
