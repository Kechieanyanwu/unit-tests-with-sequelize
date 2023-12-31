require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.APP_PORT || 3000;

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());

routes(app);

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = {
  app,
  server,
};