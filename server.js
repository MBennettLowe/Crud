// This project will create a basic simple application using Nodejs, MySQL, JQuery and Bootsrap
// https://www.youtube.com/watch?v=QK3oZlaMgRQ&list=PLRfmxUfYVUp1ShQifYvvrRZKMxCPr00kd
// Using the CRUD technologies to CREATE, READ, UPDATE and DELETE Events

// Will substitute Mongodb for mySQL 

// Core Node modules and dependencies
var express = require('express');
var app = express(); // creating an express instance
var http = require('http');
var MongoClient = require('mongodb').MongoClient,format = require('util').format;
const assert = require('assert'); // still trying to research what this requirement does!!!

var bodyParser = require('body-parser');// bodyParser is simply used to get JSON output from the form.
const ejsLint = require('ejs-lint');

app.use(bodyParser.urlencoded({ extended: true }));

// Date Format Module - used for formatting dates
var dateFormat = require('dateformat');
var now = new Date();

// This is the view engine. Template parsing - We are using EJS types
app.set("view engine", "ejs");

// Gives access to Bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Create a URL to the MongoDB local server.
const url = 'mongodb://localhost:27017';

// *******Connect to MongoDB************
// https://flaviocopes.com/node-mongodb/

var db; // initialize db
MongoClient.connect(url, function(err, client) {
  database = db;
  assert.equal(null, err);
  console.log("Mongo Heyyyyy");
 
  // Select a database using the client.db() method:
   var db = client.db("crud")
 // https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
  client.close();
});

// ****Global site title and base URL ********

// Site Title. The Site Title appears across the top of every page of a site. ... The site title might be the name of your company or organization, or a brief description of the organization, or a combination of the two.
// A base URL is, basically, the consistent part of your web address.  Everything that follows it is known as a URL path.

const siteTitle = "Simple Application" 
const baseURL = "http://localhost:4000/"

// Linking the Home Page by providing a Root

// When page is loaded
// Default page ('/') is loaded and the data is being called from Mongo database
// We also adding some JS and CSS styles

// home page request handler
app.get('/', function(req, res) {


// function getData() {
//   db.collection("e_events"),find({}, {_id:0}).sort({e_start_date:1})(function (err, document) {
//   if (err) throw err;
// console.log(err);
//   // do something
// console.log("Success");
//   )};


  //db.collection.find({}, {_id:0}).sort({e_start_date:1})(function (err, document) {
    res.render("test",{
      siteTitle : siteTitle,
      pageTitle : "Event list",
      items : '' 
    });
  });



// Creating Server
// initializes request listener
var server = app.listen(4000, () => 
    console.log("Server started on 4000...."),
);

