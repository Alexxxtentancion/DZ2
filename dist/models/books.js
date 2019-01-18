"use strict";

var db = require('../db'); // var ObjectID = require('mongodb').ObjectID;


var ObjectID = require('mongoose').Types.ObjectID;

exports.findAll = function () {
  return new Promise(function (resolve, reject) {
    try {
      var docs = db.get().collection('books').find().toArray();
      resolve(docs);
    } catch (err) {
      reject(err);
    }
  });
};

exports.findByID = function (id) {
  return new Promise(function (resolve, reject) {
    try {
      var doc = db.get().collection('books').findOne({
        _id: ObjectID(id)
      });
      resolve(doc);
    } catch (err) {
      reject(err);
    }
  });
};

exports.postOne = function (book) {
  return new Promise(function (resolve, reject) {
    try {
      var result = db.get().collection('books').insertOne(book);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

exports.putOne = function (id, newData) {
  return new Promise(function (resolve, reject) {
    try {
      var result = db.get().collection('books').update({
        _id: ObjectID(id)
      }, newData);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

exports.delOne = function (id) {
  return new Promise(function (resolve, reject) {
    try {
      var result = db.get().collection('books').deleteOne({
        _id: ObjectID(id)
      });
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};