export default function iterateThroughObject(reportWithIterator) {
  let returnString = '';
  const employees = [...reportWithIterator];
  const len = employees.length;
  for (const [idx, employee] of employees.entries()) {
    if (idx === len - 1) {
      returnString += employee;
    } else {
      returnString += `${employee} | `;
    }
  }
  return returnString;
}
