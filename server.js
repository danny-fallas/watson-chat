'use strict';
var path = require('path');

module.exports = function (app, express) {
    var cacheTime = 86400000 * 7;
    app.use(express.static(path.join(__dirname, 'src'), {
        etag: false,
        maxage: cacheTime
    }));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'src', 'index.html'));
    });
}