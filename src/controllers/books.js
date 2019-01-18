var Books = require('../models/books');
const fs = require('fs');
var db = require('../db');
var mongodb = require('mongodb');
exports.findAll = async function (req, res) {

    try {
        const docs = await Books.findAll();
        return res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}
exports.findByID = async function (req, res) {
    try {
        const doc = await Books.findByID(req.params.id);
        return res.status(200).json(doc);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}
exports.postOne = async function (req, res) {
    var book = {
        title: req.body.title,
        author: req.body.author,
        desc: req.body.desc

    }
    try {
        const doc = await Books.postOne(book);
        return res.status(200).json(book);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}
exports.putOne = async function (req, res) {
    // var bookData = {
    //     title:req.body.title,
    //     author:req.body.author,
    //     desc:req.body.desc

    // }
    try {
        await Books.putOne(req.params.id, {
            $set: req.body
        })
        return res.sendStatus(200)
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}
exports.delOne = async function (req, res) {
    try {
        await Books.delOne(req.params.id);
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

// exports.saveFile = async function (req, res) {
//     var bucket = new mongodb.GridFSBucket(db);
//     busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
//             file.pipe(
//                 bucket.openUploadStream('filename.jpg')).
//             on('error', function (error) {
//                 assert.ifError(error);
//             }).
//             on('finish', function () {
//                 console.log('done!');
//                 return res.sendStatus(200);
//             });
//     }
//     )
// }