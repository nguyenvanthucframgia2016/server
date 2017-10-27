var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// connect database
mongoose.connect('mongodb://localhost:27017/employees');
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

// import routes
require('./app/routes/api.js')(app);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
