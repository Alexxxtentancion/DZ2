
const express = require('express');
// var bodyParser = require('body-parser');
import bodyParser from 'body-parser';
import cors from 'cors';
const url = 'mongodb://localhost:27017/books'
var app = express();
var db = require('./db');
var booksControllers = require('../src/controllers/books');
const busboy = require('connect-busboy');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(busboy());
const port = 3012

app.get('/books',booksControllers.findAll)
app.post('/books',booksControllers.postOne);
app.delete('/books/:id',booksControllers.delOne);
app.put('/books/:id',booksControllers.putOne);
app.get('/books/:id',booksControllers.findByID);
// app.post('/books/saveF',booksControllers.saveFile);

db.connect(url,function(err){
    if(err){
        return console.log('smth`s gone wrong',(err ))
    }
    app.listen(port, (err) =>{
        
         console.log(`is listening on ${port}`);
    })
})

