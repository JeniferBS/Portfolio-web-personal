var express = require('express')
var app = express()
var exp_handlebars  = require('express-handlebars');
var hbs = exp_handlebars.create({defaultLayout: 'base'});

app.engine(hbs.extname, hbs.engine);
app.set('view engine', hbs.extname);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index');
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('PROJECT app listening on port ' + PORT));

module.exports = app;