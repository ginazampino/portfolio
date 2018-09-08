const express = require('express');
const app = express();

const github = require('./github');
const config = require('./config');

require('./middleware/')(app);
require('./routes/')(app);

app.listen(config.server.port, function () {
    console.log('Now listening on port ' + config.server.port + '.')
});