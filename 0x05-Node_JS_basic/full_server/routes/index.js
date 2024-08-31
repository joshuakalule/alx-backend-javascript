const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const mapRoutes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = mapRoutes;
