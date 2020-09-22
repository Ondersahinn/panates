var mongoose = require('mongoose');
var Record = require('./model/recordModel');


module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Palanetes', { useMongoClient: true,  useCreateIndex: true , useNewUrlParser: true});

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}

