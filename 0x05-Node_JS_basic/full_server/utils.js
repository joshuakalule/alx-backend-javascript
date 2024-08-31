const fs = require('fs');

const readDatabase = (filepath) => new Promise((resolve, reject) => {
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

      resolve(fields);
    }
  });
});

module.exports = readDatabase;
