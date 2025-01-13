const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Get all items
app.get('/', (req, res) => {
  const response = {
    message: '[Express] Welcome to the API',
  };
  res.json(response);
});

app.get('/check', async (req, res) => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await result.json();
  const response = {
    message: '[Express] Check API',
    data,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
