const express = require('express');
const app = express();
const PORT = 4000;
const os = require('os');
const {name, summ} = require('./name');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const routes = require('./routes');
const auth = require('./auth');

app.use(routes);
app.use(auth);

const routes = require('./routes')



app.listen(PORT, () => {
    console.log("server working");
});