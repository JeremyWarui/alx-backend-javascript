const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  const id = request.params.id;
  response.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (request, response) => {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (request, response) => {
  const username = request.body.userName;
  response.send(`Welcome ${username}`);
});

app.listen(port=7865, () => {
  console.log('API available on localhost port 7865');
});
