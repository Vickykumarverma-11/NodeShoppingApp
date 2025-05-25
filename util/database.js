const mongodb = require('mongodb');

const MongiClient = mongodb.MongoClient;
let _db;
const mongoConnect = callback => {
  MongiClient.connect('mongodb+srv://bickyvermamsp420:Bicky123@cluster0.shiyqdv.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0').
    then(client => {
      console.log('CONNECTED');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

