const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req, res){
	 res.sendFile(__dirname + '/index.html');
});


app.get('/page/:page', function(req, res){
	res.end(fs.readFileSync(req.params.page+'.html', 'utf-8'));
})

app.listen(3000, () => {
	console.log('Running on port 3000 ...');
});