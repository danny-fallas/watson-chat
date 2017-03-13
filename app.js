'use strict';
var express = express || require('express');
var app = express();

require('./server.js')(app, express);
require('./server-api.js')(app);

const PORT = process.env.PORT || 500;
app.listen(PORT, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening port: ' + PORT);
});