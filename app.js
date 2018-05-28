var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static('public'));




app.get('/about',function(req,res){
	res.render('about');
});

app.get('/projects',function(req,res){
	res.render('projects');
});

app.get('/contact',function(req,res){
	res.render('contact');
});

app.get('/',function(req,res){
  	res.render('home'); //We can omit the .handlebars extension as we do below
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});