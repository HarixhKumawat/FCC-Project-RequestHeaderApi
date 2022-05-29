require('dotenv').config();
var express = require('express');
var http = require('http');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  ip = req.ip;
  doc = req.headers;
  language = doc['accept-language'];
  software = doc['user-agent'];
  console.log(doc);
  res.json({'ipaddress': ip, 'language': language, 'software': software});
})



var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});