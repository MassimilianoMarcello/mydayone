const express = require('express');
const app = express();
const port = 3001;   
const path = require('path');

// const routes= require('./routes');

// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('public'));
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
// app mail
// Configuring our data parsing
app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  //Send an email here but currently dummy email
  console.log('Data:', req.body);
  res.json({message: 'Message received!'})
});



// listen port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${port}`);
});
