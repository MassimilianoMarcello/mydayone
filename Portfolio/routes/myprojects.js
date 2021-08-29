const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => response.send('my projects list'));
  router.get('/:name', (request, response) => response.send(`Detail page of ${request.params.name}`));

  return router;
};
