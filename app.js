const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('assets'));
app.use(express.static('views'));
app.use(express.static('pages'));

app.get('/', function(req, res){
	 res.sendFile(__dirname + '/index.html');
});

app.get('/component/:page', function(req, res){
	res.end(fs.readFileSync('pages/'+req.params.page+'/'+req.params.page+'.html', 'utf-8'));
});

app.post('/api/add', function(req, res){
	res.send('This is post method');
});

app.listen(3000, () => {
	console.log('Running on port 3000 ...');
});