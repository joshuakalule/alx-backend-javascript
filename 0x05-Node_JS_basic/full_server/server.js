const express = require('express');
const mapRoutes = require('./routes');

const app = express();

mapRoutes(app);

app.listen(1245, () => {
  console.log('Server listening on http://localhost:1245');
});

module.exports = app;
