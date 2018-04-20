const express = require('express');
const app = express();
const path = require('path');
let fs = require('fs');

app.use(function(a,b,x){
	console.log('x');
	x();
});

app.get('/', function(req, res){
	 res.sendFile(__dirname + '/index3.html');
});

app.get('/product', function(req, res){
	 res.send('hello');
});

app.get('/hi/:s', function(req, res){
	 res.send('hello');
});

app.get('/ex4_1.html', function(req, res){
	let y = fs.readFileSync('ex4_1.html', 'utf-8')
	 res.send(y);
});

app.get('/page/:page', function(req, res){
	res.end(fs.readFileSync(req.params.page+'.html', 'utf-8'));
})

app.listen(3000, () => {
	console.log('Running on port 3000 ...');
});