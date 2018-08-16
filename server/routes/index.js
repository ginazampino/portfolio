const path = require('path');

module.exports = function (app) {
    const index = path.resolve(__dirname, '../../wwwroot/index.html');

    app.get('/', function (request, response) {
        response.sendFile(index);
    });
};