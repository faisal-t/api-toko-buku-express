var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./app/api/auth/router');
var categoriesRouter = require('./app/api/categories/router');
const URL = `/api/v1`

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req,res) => {
//     res.json({message: 'api express baru'});
// });
app.use(`${URL}`, authRouter);
app.use(`${URL}`, categoriesRouter);

module.exports = app;
