const express = require('express');
const cors = require('cors');
const compression = require('compression');

const config = require('./config');
const { Connect } = require('./config/mongoose');

const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());

app.use('/api', require('./api/routes'));

app.listen(config.PORT, () => {
  console.log('Server is listening on PORT ', config.PORT);
  Connect();
})

module.exports = app;