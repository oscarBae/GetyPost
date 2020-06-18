const fs = require('fs');
const path = require('path');
const router = require('../routes/products');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		// Do the magic
		let allproduct = products.find(function(product){
			return product.id == req.params.productId;
		});
			//return res.send("estos son todos los productos")
			return res.render('products', {allproduct});
},
	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	let product = products.find(function(product){
		return product.id == req.params.productId;
	})	
		return res.render('detail', {product});
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		let product = products.find(function(product){
			return product.id == req.params.productId;
		})		
			//res.send(product)
		    return res.render('product-edit-form',{product});
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let product = products.find(function(product){
			return product.id == req.params.productId;
		})	
		product.edit (req.body, product);

		return res.redirect('product/detail/', + req.param.product.id)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic

	}
};

module.exports = controller;