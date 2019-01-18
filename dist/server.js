"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express'); // var bodyParser = require('body-parser');


var url = 'mongodb://localhost:27017/books';
var app = express();

var db = require('./db');

var booksControllers = require('../src/controllers/books');

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
var port = 3012;
app.get('/books', booksControllers.findAll);
app.post('/books', booksControllers.postOne);
app.delete('/books/:id', booksControllers.delOne);
app.put('/books/:id', booksControllers.putOne);
app.get('/books/:id', booksControllers.findByID);
db.connect(url, function (err) {
  if (err) {
    return console.log('smth`s gone wrong', err);
  }

  app.listen(port, function (err) {
    console.log("is listening on ".concat(port));
  });
});