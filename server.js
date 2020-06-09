const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const stepRouter = require('./steps/step-router.js')
const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use('/api/steps', stepRouter);

module.exports = server;