require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// logger
app.use(morgan("tiny"))

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// Add routes, both API and view
app.use(require("./routes"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
