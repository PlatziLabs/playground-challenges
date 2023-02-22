export function getStudentAverage(students) {
  const studentsWithAverage = students.map((student) => {
    const grades = student.grades;
    const average =
      grades.reduce((total, item) => total + item, 0) / grades.length;
    return {
      name: student.name,
      average: Number(average.toFixed(2)),
    };
  });

  const classAverage =
    studentsWithAverage.reduce((total, student) => total + student.average, 0) /
    studentsWithAverage.length;

  const rta = {
    classAverage: Number(classAverage.toFixed(2)),
    students: studentsWithAverage,
  };

  return rta;
}
