// Imported all Node modules 
// Core Node modules
var express = require('express');
var http = require('http');
var mongodb = require('mongodb');
var app = express(); // creating an express instance
var bodyParser = require('body-parser');

// bodyParser is simply used to get output from the form
// It will parse all form data in JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

// used for formatting dates
var dateFormat = require('dateformat');
var now = new Date();

// This is the view engine
// Template parsing
// We are using EJS types
app.set('view engine', 'ejs');

// Gives access to Bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Creating Server
var server = app.listen(4000, function() {
    console.log("Server started on 4000....");
});

