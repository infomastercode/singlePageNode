const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const template = require('./lib/template');

/*app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');*/

app.set('view engine', 'html');
app.engine('html', template);


app.get('/', function(req, res){
	let form = fs.readFileSync('views/product.html');
	console.log(form);
	  res.render('index', { title: 'Hey', message1: 'Hello there!', form: form.toString() })
});


app.listen(3000, () => {
	console.log('Running on port 3000 ...');
});


let render = function(filePath, options, callback){
	const fs = require('fs');
	fs.readFile(filePath, function(err, content){
		if (err) throw err;
		let rendered = content.toString();
		let dataReplace = '';
		for(let key in options){
			if (typeof options[key] !== 'string') continue;

			//dataReplace += rendered.replace("$"+key, options[key]);
			//rendered = rendered.replace(/\$'+key+'/g, options[key]);

		//	let re = '\\$'+key;
			rendered = rendered.replace(new RegExp( '\\$'+key ,'g'), options[key]);

		//	console.log(new RegExp( re ,'g'));





				
		}
		console.log(rendered);
		//let rendered = content.toString().replace("$title", options.title);
		//console.log(rendered.replace("$title", options.title));
		//return callback(null, dataReplace);
		return callback(null, rendered);
	});
}

module.exports = render;