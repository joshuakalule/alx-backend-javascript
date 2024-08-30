const fs = require('fs');

function countStudents(filepath) {
  if (!fs.existsSync(filepath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filepath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const lines = fs.readFileSync(filepath, 'utf-8')
    .trim()
    .split('\n')
    .map((line) => line.replace('\r', ''));

  const n = lines.length - 1;

  const fields = {};
  for (let i = 1; i < lines.length; i += 1) {
    const firstname = lines[i].split(',')[0];
    const field = lines[i].split(',').pop();
    if (field in fields) {
      fields[field].push(firstname);
    } else {
      fields[field] = [firstname];
    }
  }

  process.stdout.write(`Number of students: ${n}\n`);

  for (const [field, names] of Object.entries(fields)) {
    const len = names.length;
    const list = names.join(', ');
    const string = `Number of students in ${field}: ${len}. List: ${list}\n`;
    process.stdout.write(string);
  }
}

module.exports = countStudents;
