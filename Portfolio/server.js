const express = require('express');

const path = require('path');
const routes= require('./routes');

const app = express();
const port = 3000;   // select a port
// il seguente pezzo di codice middelware(express.static)ascolta 
// all'interno della cartella selezionata per vedere se ci sono ulteriori elementi da caricare
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

// ejs code start
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));
// ejs code end




app.get('/myprojects', (request, response) => {
  response.sendFile(path.join(__dirname, './static/myprojects.html'));
});

app.get('/myskills', (request, response) => {
  response.sendFile(path.join(__dirname, './static/myskills.html'));
});

app.get('/contact', (request, response) => {
  response.sendFile(path.join(__dirname, './static/contact.html'));
});
// listen port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${port}`);
});
