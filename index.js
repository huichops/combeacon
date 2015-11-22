var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var checkout = require('./core/checkout');
var suscribe = require('./core/suscribe');
var checkin = require('./core/checkin');
var Route = require('./models/route');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/combeacon');

app.get('/', (req, res) => {
  res.send('Hello Beacon!');
});

app.post('/checkin', (req, res) => {
  checkin(req.body, (error, data) => {
    if (error) res.send(500, error);
    res.send(data);
  });
});

app.post('/checkout', (req, res) => {
  checkout(req.body, (error, data) => {
    if (error) res.send(500, error);
    res.send(data);
  });
});

app.post('/suscribe', (req, res) => {
  res.send(suscribe());
});

app.get('/routes', (req, res) => {
  Route.find({}, (error, data) => {
    if (error) res.send(500, { error: 'Database error' });
    res.send(data);
  });
});


var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http:/%s:%s', host, port);
});
