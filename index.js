'use strict';

const {dialogflow} = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser');

const app = dialogflow();

app.intent('Default Welcome Intent', conv => {
    conv.ask('Hi, Welcome to Assistant by Express JS ');
});

app.intent('Bathroom', conv => {
    conv.close('bathaaaaaaaaaaaaaaaaa ');
});

express().use(bodyParser.json(), app).listen(8080);
