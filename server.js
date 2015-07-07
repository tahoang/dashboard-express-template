/*
Author: Tu Hoang
ESRGC 2015

MDA Dashboard application
*/

var app = require('./app');
var port = require('./config').port;

app.listen(port);
console.log('Server listening on port ' + port);
console.log('Server environment: ' + app.get('env'));