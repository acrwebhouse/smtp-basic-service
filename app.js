const express = require('express');
const app = express();
const config = require('./lib/setting/config').config;
const serverPort = config.serverPort;
const server = require('http').createServer(app);
const serverUse=require('./lib/serverUse');
const smtpRestApi = require("./lib/rest_api/smtp");
console.log(config)
serverUse.on(app);
smtpRestApi.on(app);
server.listen(process.env.PORT||serverPort);
console.log("現在使用" + serverPort + "port");