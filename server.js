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
var db; // initialize db
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

//var db; 
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


  // Get the event list

// Making queries with find()
// Collections can be queried with find.

// collection.find(query[[[, fields], options], callback]);
// Where

// query - is a query object, defining the conditions the documents need to apply
// fields - indicates which fields should be included in the response (default is all)
// options - defines extra logic (sorting options, paging etc.)
// raw - driver returns documents as bson binary Buffer objects, default:false
// callback has two parameters - an error object (if an error occured) and a cursor object.

// function getData() {
//   db.collection("e_events"),find({}, {_id:0}).sort({e_start_date:1})(function (err, document) {
//   if (err) throw err;
//   // do something
//   )};


// var dataset = [
//   {// doint more stuff here.
//   }
// ];
// });

// mongodb.connect() is called mongodb.connect() is called asynchronously
// http.get("/crud", function(req, res) {
//   MongoClient.connect(url_monitor, function (err, db) {
//     assert.equal(null, err);
//   });
// });

  //db.collection.find({}, {_id:0}).sort({e_start_date:1})(function (err, document) {
  //   res.render('pages/index');
  // });

  res.render('pages/index', {
    siteTitle : siteTitle,
    pageTitle : "Event list",
    items : '' 
    
  });
});

// con.query("SELECT * FROM e_events ORDER BY e_start_date DESC", function (err, res) {
//   res.render('pages/index', {
//     siteTitle : siteTitle,
//     pageTitle : "Event list",
//     items : result
//   });
// });
// });



// Creating a SQL Database Connection
// To create a connection in SQL
// Localhost - When in production mode change this to your host
// User - User name of the database
// Password - Database password
// Database - Database is the name of the database

// const con = mysql.createConnection({ 
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "mydb"
//});

// Creating Server
// initializes request listener
var server = app.listen(4000, () => 
    console.log("Server started on 4000...."),
);

