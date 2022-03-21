

const express = require('express');

const PORT = 8081;
const HOST = "10.0.3.4";


const app = express();
app.get('/', (req, res) => {
  res.send('Hello World, im the second one');
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})
