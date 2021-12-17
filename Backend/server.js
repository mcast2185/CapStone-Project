const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./routes/routes")
const cors = require("cors");
require("dotenv").config();

const URI = process.env.URI;
const port = process.env.PORT || 5050;
const app = express();

mongoose.connect(URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then()
  .catch(err => {
    console.log("Failed to connect to database");
  });

const MongooseConnection = mongoose.connection;

MongooseConnection.on("connected", (stream) => {
  console.log("Successful connection to database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

  }));

app.use("/", router)

app.listen(port, () => {
  console.log(`Connected to server on port: ${port}`);
})