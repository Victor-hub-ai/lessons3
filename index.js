const express = require('express');
const app = express();
const PORT = 666;
const os = require('os');

const {name, summ} = require('./name');
// const db = require('./db/app');

// const qwe = require('./name');

// qwe.name('Vassa')
// qwe.summ(20,20)

name('Viktor2004');
summ(20,20);


// console.log(db);

app.listen(PORT, () => {
    console.log("server working...");
});