export default function getStudentsByLocation(students, city) {
  if (!(Array.isArray(students))) {
    return [];
  }
  return students.filter((studentObj) => studentObj.location === city);
}
