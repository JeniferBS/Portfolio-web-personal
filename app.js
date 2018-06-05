var express = require('express')
var app = express()
var exp_handlebars  = require('express-handlebars');
var hbs = exp_handlebars.create({defaultLayout: 'base'});

<<<<<<< HEAD
var context = {
  title: "My First Blog Post!",
  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  body: "My first post. Wheeeee!"
};

=======
CONTACT_EMAIL = 'tuemail';
>>>>>>> 4fbbcdca80fb7f3c8b006be95995eddc7042ce18

app.engine(hbs.extname, hbs.engine);
app.set('view engine', hbs.extname);
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.render('index');
 
  

=======
  // email = process.env.CONTACT_EMAIL;
  // TODO Load projects as JSON
  // TODO Load the projects in the projects variables
  res.render('index', {email: CONTACT_EMAIL, projects: []});
>>>>>>> 4fbbcdca80fb7f3c8b006be95995eddc7042ce18
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('PROJECT app listening on port ' + PORT));

module.exports = app;