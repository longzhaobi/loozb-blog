'use strict';

var Nuxt = require('nuxt');
var app = require('express')();
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

app.set('port', port);

// Import API Routes
app.use('/api', require('./api/index.js'));

// Import and Set Nuxt.js options
var config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
var nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  nuxt.build().catch(function (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
