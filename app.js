var express = require('express');

var app = express();

app.get('/', function(req, res) {
  function toCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var address = req.connection.remoteAddress.replace(/^.*:/, '');
  var lang = req.headers['accept-language'];
  lang = lang.split(',');
  var os = process.platform

  if(os === 'win32') {
    os = 'Windows';
  } else if(os === 'darwin') {
    os = 'Mac OSX';
  }
  var dataObj = {
    language: lang[0],
    software: toCap(os),
    ipaddress: address
  }
  res.send(dataObj);
})

app.listen(process.env.PORT || <default port>);
