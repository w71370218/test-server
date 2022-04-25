const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
    console.log('who connected.');
});

app.listen(process.env.PORT || 5000, () => {
    console.log('server listening on 5000..');
});