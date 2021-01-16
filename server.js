// installing dependencies:
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path")
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Routes
app.use(require("./routes/api-route"))
app.use(require("./routes/html-route"))


app.listen(process.env.PORT || 4000, () => {
    console.log("app is listening");
  })
