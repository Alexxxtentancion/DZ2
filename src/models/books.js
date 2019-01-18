var db = require('../db');
var ObjectID = require('mongodb').ObjectID;
// let ObjectID = require('mongoose').Types.ObjectID;

exports.findAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const docs = db.get().collection('books').find().toArray();
            resolve(docs);
        } catch (err) {
            reject(err);
        }
    })
}
exports.findByID = id => {
    return new Promise((resolve,reject) => {
        try {
            const doc = db.get().collection('books').findOne({_id:ObjectID(id)});
            resolve(doc);
        }catch(err){
            reject(err);
        }
    })
}
exports.postOne = book => {
    return new Promise((resolve, reject) => {
        try {
            const result = db.get().collection('books').insertOne(book);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}
exports.putOne = (id,newData) => {
    return new Promise((resolve,reject) =>{
        try{
            const result = db.get().collection('books').update(
                {_id:ObjectID(id)},newData);
            resolve(result);
        }catch(err){
            reject(err);
        }
    })
}
exports.delOne = id => {
    return new Promise((resolve, reject) => {
        try {
            const result = db.get().collection('books').deleteOne({
                _id: ObjectID(id)
            });
            resolve(result)
        } catch (err) {
            reject(err);
        }
    })
}

