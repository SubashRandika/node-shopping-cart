const express = require('express');
const router = express.Router();

router.post('/add-product', (req, res, next) => {
	console.log('POST - /add-product');
});

router.get('/product', (req, res, next) => {
	console.log('GET - /product');
});

module.exports = router;
