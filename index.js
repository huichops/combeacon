var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
  res.send('Hello Beacon!');
});

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http:/%s:%s', host, port);
});
