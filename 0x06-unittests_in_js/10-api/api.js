const express = require('express');
const app = express();

const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
});

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.end(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port 7865`);
});
