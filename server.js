const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const bill = require('./api/bill');

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//app.get('/', (req, res) => res.send('Hello World'));

//use routes
app.use('/api/bill', bill);

const port = 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));
module.exports.app = app;