const http = require('http');
const fs = require('fs');

const filepath = process.argv.length > 2 ? process.argv[2] : 'nope.csv';

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

      let text = `Number of students: ${n}\n`;

      for (const [field, names] of Object.entries(fields)) {
        const len = names.length;
        const list = names.join(', ');
        text += `Number of students in ${field}: ${len}. List: ${list}\n`;
      }
      resolve(text);
    }
  });
});

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(filepath);
      res.end(studentData);
    } catch (err) {
      res.end(err.message);
      res.statusCode = 500;
    }
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245');
});

module.exports = app;
