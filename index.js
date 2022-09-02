'use strict'

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1 style="color:#55ff55">Hello</h1>');
    response.end();
}).listen(3000);