// Imported all Node modules // node js express mysql Tutorial https://www.youtube.com/watch?v=QK3oZlaMgRQ&list=PLRfmxUfYVUp1ShQifYvvrRZKMxCPr00kd
// Will substitute mySQL db for Mongodb

// Imported all Node modules 
// Core Node modules
var express = require('express');
var http = require('http');
var MongoClient = require('mongodb').MongoClient,format = require('util').format;
const assert = require('assert'); // still trying to research what this requirement does!!!
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

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/crud"; // Connection URL

// ******Start a MongoDB Server*********

// Download the right MongoDB version from MongoDB
// Create a database directory (in this case under /data).
// Install and start a mongod process.
// mongod --dbpath=/data
// You should see the mongod process start up and print some status information.

// *******Connect to MongoDB************

// Create a new .js file and add the following code to try out some 
// basic CRUD operations using the MongoDB driver.

// Add code to connect to the server and the database crud:

//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = "crud";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

// ****Global site title and base URL ********

const siteTitle = "Simple Application"
const baseURL = "http://localhost:4001/"

// Linking the Home Page by providing a Root

// When page is loaded
// Default page is loaded and the data is being called from Mongo database
// We also adding some JS and CSS styles

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

  db.collection.find({}, {_id:0}).sort({e_start_date:1})(function (err, document) {
    res.render('pages/index', {
      siteTitle : siteTitle,
      pageTitle : "Event list",
      items : result
    });
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

