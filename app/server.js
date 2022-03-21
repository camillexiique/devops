

const express = require('express');

const PORT = 8080;
const HOST = "10.0.3.4";


const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})
