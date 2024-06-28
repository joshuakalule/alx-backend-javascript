export default function createIteratorObject(report) {
  const employees = [];
  if ('allEmployees' in report) {
    const { allEmployees } = report;
    for (const departmentList of Object.values(allEmployees)) {
      for (const employee of departmentList) {
        // console.log(employee);
        employees.push(employee);
      }
    }
  }
  return employees.values();
}
