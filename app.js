var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/',function(req,res){
	var params = [];
	for(var p in req.query){
		params.push({'name':p,'value':req.query[p]})
		//params += p + " = " + req.query[p] + " ";
	}
	var context = {};
	context.dataList = params;
	
  	res.render('home', context) //We can omit the .handlebars extension as we do below
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});