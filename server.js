var express = require('express');
var port = process.env.PORT;

app = express();

var parsed = {"ipaddress":"_", "language":"_", "software":"_"};

app.get('/', function(req, res) {
  var ip = JSON.stringify(req.headers.host).toString();
  parsed.ipaddress = ip.slice(1, ip.length-6);
  var lang = JSON.stringify(req.headers["accept-language"].toString());
  parsed.language = lang.slice(1, lang.indexOf(','));
  var soft = JSON.stringify(req.headers["user-agent"].toString());
  parsed.software = soft.slice(soft.indexOf('(') + 1, soft.indexOf(')'));
  console.log(req.headers);
  res.send(JSON.stringify(parsed));
});

app.listen(port, function(req, res) {
});
