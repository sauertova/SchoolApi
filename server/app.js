const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
module.exports = app;

//Logging middleware
app.use(morgan("dev"));

//Body parsing middleware
app.use(express.json());

//Enable CORS for all routes
app.use(cors());

//Base route here
app.use("/api", require("./api"));

app.use((err, reg, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

