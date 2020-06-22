const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const login = require('./routes/login');
const logout = require('./routes/logout');

const app = express();

// Connection for Mongodb
mongoose
  .connect("mongodb+srv://[USERNAME]:[PASSWORD]@cluster0-p4slr.mongodb.net/[DATABASE NAME]?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));            

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/login', login);
app.use('/users', usersRouter);
app.use('/logout',logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;