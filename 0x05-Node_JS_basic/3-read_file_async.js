const fs = require('fs');

const countStudents = (filepath) => new Promise((resolve, reject) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.trim().split('\n').map((line) => line.replace('\r', ''));

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

      console.log(`Number of students: ${n}`);

      for (const [field, names] of Object.entries(fields)) {
        const len = names.length;
        const list = names.join(', ');
        const string = `Number of students in ${field}: ${len}. List: ${list}`;
        console.log(string);
      }
      resolve('Done!');
    }
  });
});

module.exports = countStudents;
