const express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send({
    name : 'Ivica',
    lastname : 'Bogoevski'
  });
});

app.listen(3000);
