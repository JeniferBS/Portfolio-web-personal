var express = require('express')
var app = express()
var exp_handlebars  = require('express-handlebars');
var hbs = exp_handlebars.create({defaultLayout: 'base'});

CONTACT_EMAIL = 'tuemail';

app.engine(hbs.extname, hbs.engine);
app.set('view engine', hbs.extname);
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  // email = process.env.CONTACT_EMAIL;
  res.render('index', {email: CONTACT_EMAIL});
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('PROJECT app listening on port ' + PORT));

module.exports = app;