const express = require('express');
const asyncHandler = require('express-async-handler');

// import all DB models
const { User, Product, Review } = require('../../db/models/');

const router = express.Router();

// grab all associated data pertaining to products
router.get('/', asyncHandler(async (req, res) => {
	// res.cookie('XSRF-TOKEN', req.csrfToken());
	// res.send("Hello from /");
	const products = await Product.findAll();
	return res.json(products);	//left optional explicit return for readability
}));

// grab one DB entry for a single product
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
	// res.send("Hello from /:id")
	const productId  = +(req.params.id); //convert str to int, in lieu of parseInt() or Number()
	// productId = +productId;
	const product = await Product.findByPk(productId) //! Did we need parseInt(id, 10) here?
	return res.json(product);		//left optional explicit return for readability
}));

//! add new product to database
router.post('/add', asyncHandler(async (req, res) => {
	const { ownerId, title, imageUrl, productUrl, description } = req.body;

	const product = await Product.create({
		ownerId,
		title,
		imageUrl,
		productUrl,
		description
	});

	return res.json(product);
}));

//! update a specific product
router.put('/update/:id(\\d+)', asyncHandler(async (req, res) => {
	const productId = +(req.params.id); //! in lieu of parseInt() or Number()
	const { ownerId, title, imageUrl, productUrl, description } = req.body;
	const product = await Product.findOne({
		where: { id: productId }
	});

	await product.update({
		ownerId,
		title,
		imageUrl,
		productUrl,
		description
	})

	return res.json(product)
}));

//! delete a specific product
// router.delete('delete/:id(\\d)', asyncHandler(async (req, res) => {
// 	const productId = +(req.params.id);
// 	const product = await Product.findByPk(productId);

// 	await product.destroy();
// })

module.exports = router;
