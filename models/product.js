const mongoose = require('mongoose');

// Product Schme
const productSchema = mongoose.Schema({
	product_code : {
		type: String,
		require: true
	},
	product_name : {
		type: String,
		require: true
	},
	price : {
		type: String,
		require: true
	},
	quantity : {
		type: String,
		require: true
	},
	date_add : {
		type: Date,
		default: Date.now
	}
});

/* in mongodb need 's' => products */
const Product = module.exports = mongoose.model('Product', productSchema);

// Get Products
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

// Update product
module.exports.updateProduct = (id, product, options, cakllback) => {
	const query = {_id: id};
	const update = {
		product_code: product.product_code,
		product_name: product.product_name,
		price: product.price,
		quantity: product.quantity
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProduct = (id, callback) => {
	const query = {_id: id};
	Product.remove(query, callback);
}

module.exports.test = () => {
	console.log('test');
}