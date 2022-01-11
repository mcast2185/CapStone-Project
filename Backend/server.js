const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./routes/routes")
const cors = require("cors");
require("dotenv").config();

const MONGODB_URI = "mongodb+srv://mcast2185:asdf2185@cluster0.umno5.mongodb.net/chat-login?retryWrites=true&w=majority";
const port = process.env.PORT || 5050;
const app = express();

mongoose.connect(MONGODB_URI, async () => { 
  try {
    return {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }
  } catch (err) {
    console.log("mongoose connection error:", err);
    
  }}
);

const MongooseConnection = mongoose.connection;

MongooseConnection.on("connected", (stream) => {
  console.log("Successful connection to database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://capstonefrontendpage.herokuapp.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/", router);

app.listen(port, () => {
  console.log(`Connected to server on port: ${port}`);
});