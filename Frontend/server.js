const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

  })
);
app.use(express.static(__dirname + '/dist/'));

app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);