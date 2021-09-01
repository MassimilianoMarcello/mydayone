const express = require('express');
const app = express();
const port = 3001;   
const path = require('path');

// const routes= require('./routes');

app.use(express.static(path.join(__dirname, './static')));

// app.use('/', routes);

app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/projects', (req, res) => {
  res.render('myprojects')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})


// listen port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${port}`);
});
