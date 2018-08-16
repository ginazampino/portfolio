const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = function (app) {
    const wwwroot = path.resolve(__dirname, '../../wwwroot');

    app.use(express.static(wwwroot));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}