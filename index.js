const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/js', express.static(path.join(__dirname, 'public/scripts')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/bootstrap', express.static(path.join(__dirname, 'public/bootstrap')));



  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'public/templates/views'));

  app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.render('index');
});

  app.get('/hronology', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.render('hronology');
});
  
  app.get('/media', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.render('media');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});