// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
var method = require("method-override");
let mongoose = require("mongoose");


let dbUrl = 'mongodb://localhost/HeadlinesDB';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
}
else {
	mongoose.connect(dbUrl);
};

// Database configuration with mongoose
mongoose.Promise = Promise;

let db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

let port = process.env.PORT || 8080;

// Initialize Express
let app = express();



// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(method("_method"));

// Make public a static dir
app.use(express.static("public"));

// Set Handlebars.
let expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/routes.js")(app);

// Listen on port 8080
app.listen(port, function() {
  console.log("App is running on port " + port);
});
