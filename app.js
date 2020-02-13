const express = require('express');
const enrouten = require('express-enrouten');
const expressValidator = require('express-validator');
const cors = require('cors');
const config = require('./config.js');

const app = express();

app.use(cors());
app.use(expressValidator());

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger
// app.set('etag', false);

// Routing
// app.use((req, res, next) => {
//   if (req.headers['service-apikey'] !== config.get('SERVICE_APIKEY')) {
//     return res.status(401).json({
//       msg: 'UNAUTHORIZE',
//       rc: 32,
//     });
//   }
//   return next();
// });
app.use('/', enrouten({ directory: 'controllers' }));

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Resource not found.',
    rc: 404,
  });
});

app.listen(config.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${config.get('PORT')}`);
});


module.exports = app;
