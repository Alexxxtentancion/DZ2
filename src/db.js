var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
};

exports.connect = function (url,done) {
    if(state.db) {
        return done();
    }

    MongoClient.connect(url,{useNewUrlParser: true},function(err,db) {
        if(err) {
            return done(err);
        }
        state.db = db.db('homework2');
        done();
    })

    // mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    //     () => {console.log('Database is connected') },
    //     err => { console.log('Can not connect to the database'+ err)}
    // );
}

exports.get = function() {
    return state.db;
}

// module.exports = {
//     DB: 'mongodb://localhost:27017/homework2'
// }