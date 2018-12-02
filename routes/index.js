const express = require("express");
const router = express.Router();
const http = require('http');

const DB = require("../lib/db");

router.get("/frequentProducts", (req, res) => {
	console.log("GET");

	http.get('http://127.0.0.1:8080/frequentProducts', res2 => {
		let data = '';
	
		res2.on('data', chunk => {
			data += chunk;
		});
	
		res2.on('end', () => {
			console.log('SPARK : ' + data);
			res.json(data);
		});
	});
});

router.post("/invoices", (req, res) => {
	console.log("POST");
	const invoice = req.body;
	
	DB.Invoice.create(invoice, (err, newInvoice) => {
		if (err) {
			res.status(500).send("Error : invoice already in DB");
			return;
		}
		res.status(201).send({ id: newInvoice.id, products: newInvoice.products });
	});
});

module.exports = router;