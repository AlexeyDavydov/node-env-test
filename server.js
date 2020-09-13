// https://medium.com/@victor.valencia.rico/environment-variables-with-node-js-1f84fa26f316
// https://www.npmjs.com/package/dotenv

const config = require('./config.js');
const express = require('express');
const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});