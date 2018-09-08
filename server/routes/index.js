const path = require('path');
const github = require('../github');

module.exports = function (app) {
    const index = path.resolve(__dirname, '../../wwwroot/index.html');

    app.get('/', function (request, response) {
        response.sendFile(index);
    });

    app.get('/api/github/commits', function (request, response) {
        response.json(github.githubData.commits);
    });
};