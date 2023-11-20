
 const express = require('express');
 const app = express();

 const ProductRoute = require('./api/route/product');

 app.use('/product',ProductRoute);

 module.exports = app;