
var cron = require('node-cron');
var rp = require('request-promise')
var restify = require('restify');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
const url = 'mongodb://admin:admin123@ds123645.mlab.com:23645/coba-ini';

// Database Name
const dbName = 'coba-ini';

 
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post()


MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  cron.schedule('*/5 * * * * *', async () => {
    await db.collection('boards').insertOne({abc : 'test'
        });

      });
    });

    server.listen(8000, function () {
  console.log('%s listening at %s', server.name, server.url);
});