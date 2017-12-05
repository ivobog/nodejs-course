const express = require('express');

const port = process.env.PORT || 3000

var app = express();

app.get('/', (request, response) => {
  response.send({
    name : 'Ivica',
    lastname : 'Bogoevski'
  });
});

app.listen(port, () => {
  console.log(`listening ${port}`);
});
