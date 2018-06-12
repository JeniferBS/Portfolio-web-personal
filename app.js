var express = require('express')
var fs = require('fs');
var app = express()
var exp_handlebars  = require('express-handlebars');
var hbs = exp_handlebars.create({defaultLayout: 'base'});
const https = require('https');

const basicAuth = require('express-basic-auth')

app.use(
  basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true
}));


var context = {
  title: "My First Blog Post!",
  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  body: "My first post. Wheeeee!"
};


app.engine(hbs.extname, hbs.engine);
app.set('view engine', hbs.extname);
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));
  res.render('index', {projects: projects});

  // https.get(
  //   'https://www.behance.net/v2/collections/9866/projects?api_key=pgdNQGd3aP8iIwdQmyCNnnHyI4XT752n', function(response) {
  //   let data = '';

  //   response.on('data', (chunk) => {
  //         data += chunk;
  //   });

  //   response.on('end', () => {
  //       let projects = JSON.parse(data).projects;

  //       for(index in projects) {
  //         console.log(index);
  //         console.log(projects[index].covers['original']);
  //       }
  //   });
  // });

  // email = process.env.CONTACT_EMAIL;
  // TODO Load projects as JSON
  // TODO Load the projects in the projects variables
  //res.render('index', {email: CONTACT_EMAIL, projects: []});
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('PROJECT app listening on port ' + PORT));

module.exports = app;