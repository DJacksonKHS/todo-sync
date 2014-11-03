var express = require('express')
    , app     = express()
    , PouchDB = require('pouchdb');

new PouchDB('todo');

app.use('/db', require('express-pouchdb')(PouchDB));
app.use(express.static(__dirname + '/public/'));


app.listen(3000);

console.log('TODO Sync server listening on port 3000');