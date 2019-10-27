const express = require("express");
const bodyParser = require("body-parser");
const mongoose =require('mongoose');

const Cities = require('../models/cities');

const cityRouter = express.Router();

cityRouter.use(bodyParser.json());

cityRouter.route("/")
.get((req, res, next) => {
	//console.log(req);
	Cities.find(req.query)
	.then((cities) => {
		console.log("success");
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(cities);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.post((req, res, next) => {
	Cities.create(req.body)
	.then((cities) => {
		console.log('City Created', articles);
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(cities);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end("Put operation not supported");
})
.delete((req, res, next) => {
	Cities.remove()
	.then((resp) => {
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	}, (err) => next(err))
	.catch((err) => next(err));
});

module.exports = cityRouter;