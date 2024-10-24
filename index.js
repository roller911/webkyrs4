const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/js', express.static(path.join(__dirname, 'public/scripts')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/bootstrap', express.static(path.join(__dirname, 'public/bootstrap')));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'public/templates/views/index.ejs'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});