const express = require("express");
const bodyParser = require("body-parser");
const mongoose =require('mongoose');

const Articles = require('../models/articles');

const articleRouter = express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route("/")
.get((req, res, next) => {
	//console.log(req);
	Articles.find(req.query)
	.then((articles) => {
		console.log("success");
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		console.log(articles);
		res.json(articles);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.post((req, res, next) => {
	Articles.create(req.body)
	.then((article) => {
		console.log('Article Created', article);
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(Articles);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end("Put operation not supported");
})
.delete((req, res, next) => {
	Dishes.remove()
	.then((resp) => {
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	}, (err) => next(err))
	.catch((err) => next(err));
});

articleRouter.route("/:dishId")
.get((req, res, next) => {
	Dishes.findById(req.params.dishId)
	.then((dish) => {
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(dishes);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("Post operation not supported" + req.params.dishId);
})
.put((req, res, next) => {
	Dishes.findByIdAndUpdate(req.params.dishId, {
		$set: req.body
	}, { new: true })
	.then((dish) => {
	res.StatusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(dishes);
	}, (err) => next(err))
	.catch((err) => next(err));
})
.delete((req, res, next) => {
	Dishes.findByIdAndRemove(req.params.dishId)
		.then((resp) => {
		res.StatusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	}, (err) => next(err))
	.catch((err) => next(err));
});

module.exports = articleRouter;