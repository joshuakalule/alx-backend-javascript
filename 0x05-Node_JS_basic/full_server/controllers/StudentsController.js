const readDatabase = require('../utils');

class StudentsController {
  static getAllStudentsByMajor(request, response) {
    const filepath = process.argv.length > 2 ? process.argv[2] : 'nope.csv';
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(filepath)
      .then((fields) => {
        const names = fields[major].join(', ');
        response.status(200).send(`List: ${names}`);
      })
      .catch((err) => {
        if (!response.headersSent) {
          response.status(500).send(err.message);
        }
      });
  }

  static getAllStudents(request, response) {
    const filepath = process.argv.length > 2 ? process.argv[2] : 'nope.csv';
    let text = 'This is the list of our students\n';
    return readDatabase(filepath)
      .then((fields) => {
        for (const [field, names] of Object.entries(fields)) {
          const list = names.join(', ');
          const len = names.length;
          text += `Number of students in ${field}: ${len}. List: ${list}\n`;
        }
        response.status(200).send(text);
      })
      .catch((err) => {
        if (!response.headersSent) {
          response.status(500).send(err.message);
        }
      });
  }
}

module.exports = StudentsController;
