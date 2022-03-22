const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
const ip = 'localhost';

app.use(cors());
app.use(express.json({ strict: false }));

app.post('/upper', (req, res) => {
  res.json(req.body.toUpperCase());
  console.log('TO UPPER CASE');
});

app.post('/lower', (req, res) => {
  res.json(req.body.toLowerCase());
  console.log('TO LOWER CASE');
});

app.listen(PORT, () => {
  console.log(`SERVER NOW LISTENING ON ${ip} THROUGH ${PORT} PORT.`);
});