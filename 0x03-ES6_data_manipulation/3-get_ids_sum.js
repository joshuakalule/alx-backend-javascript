export default function getStudentIdsSum(students) {
  if (!(Array.isArray(students))) {
    return [];
  }

  return students.reduce((sum, studentObj) => sum + studentObj.id, 0);
}
