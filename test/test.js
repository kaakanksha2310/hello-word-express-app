const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.status(200).send('<h1>Hello world</h1>');
});
app.get('/', (req, res) => {
    res.status(200).send('<h1>This is AK</h1>');
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
