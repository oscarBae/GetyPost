const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		// Do the magic


let visited = products.filter(function (product){
	return product.category == "visited";
});
let inSale = products.filter(function (product){
	return product.category == "in-sale";
});
let allproduct = products.filter(function (product){
	return product.category == "allproduct";
});
		//return res.render('index', {visited, inSale});
		return res.render('products', {allproduct});
	},

	search: (req, res) => {
		// Do the magic
	const busqueda = req.query.keywords;
		//res.send("hola")
	const products = products.filter(function (product){
	return product.name == busqueda;
	})
	return res.render('results', {products,busqueda});
}
};

module.exports = controller;
