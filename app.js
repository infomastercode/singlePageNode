const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

Product = require('./models/product');

/* bodyParser for: req.body on the method POST */
app.use(bodyParser.json());

app.use(express.static('assets'));
app.use(express.static('views'));
app.use(express.static('pages'));

mongoose.connect('mongodb://localhost/stock');
const db = mongoose.connection;

app.get('/', function(req, res){
	 res.sendFile(__dirname + '/index.html');
});

app.get('/component/:page1/:page2', function(req, res){
	res.end(fs.readFileSync('pages/'+req.params.page1+'/'+req.params.page2+'.html', 'utf-8'));
});

app.post('/api/add', function(req, res){
	res.send('This is post method');
});

// -----------------------------------------------------------

app.get('/api/product', (req, res) => {
	Product.getProducts((err, products) => {
		if (err) throw err;
		res.json(products);
	});
});

app.get('/api/product/:_id', (req, res) => {
	Product.getProductById(req.params._id, (err, product) => {
		if (err) throw err;
		res.json(product);
	});
});

app.post('/api/product', function(req, res){
	const product = req.body;
	Product.addProduct(product, (err, product) => { 	console.log(err);
		if (err) throw err;
		res.json(product);
	});
});






// -----------------------------------------------------------

app.listen(3000, () => {
	console.log('Running on port 3000 ...');
});