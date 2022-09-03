'use strict'

const fs = require ('fs');
const express = require('express');
const app = express();

let buf ="";
app.get('/', (request, response) => {
    fs.readFile('./index.html', 'utf8', (err, data) => {
     response.send( data);
response.end ();
});
    //response.send('<h1 style="color:#55ff55">Hello World</h1>');
//    response.end();
}).listen(3000);
