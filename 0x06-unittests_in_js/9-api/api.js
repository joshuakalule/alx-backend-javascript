const express = require('express');
const app = express();

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    res.status(400).end();
  }
  res.end(`Payment methods for cart ${id}`);
});
app.listen(port, () => {
  console.log(`API available on localhost port 7865`);
});
