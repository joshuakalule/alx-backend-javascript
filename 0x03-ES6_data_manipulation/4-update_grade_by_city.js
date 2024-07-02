export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(Array.isArray(students))) {
    return [];
  }

  return students.filter((student) => student.location === city)
    .map((student) => {
      let finalGrade = 'N/A';
      for (const { studentId, grade } of newGrades) {
        if (studentId === student.id) {
          finalGrade = grade;
          break;
        }
      }
      return { ...student, grade: finalGrade };
    });
}
