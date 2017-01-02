'use strict'
// modules
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const db = require("./models/poemModel.js");
const mongoose = require("mongoose");

// Server
const port = process.env.PORT || 3000;

app.listen(port,function() {
	console.log('server started on', port);
});

// Database
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/PoemsDb");
app.use(express.static('index.html'));
app.use(bodyParser());
// app.use('mongoose');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res) {
	res.sendFile(__dirname +"/index.html");
	console.log("hit slash!");
});

// routes

app.get('/poems', function(req,res){
db.find(function(err,poems){
	console.log("inside get/poems");
	if (err)
    	res.send(err);
    	res.send(poems);

});
});

app.post('/poems', function(req,res){
	console.log(req.body);
	db.create(req.body,function(err,poem){
  		if (err) {return console.log(err);}
  			console.log("created" + req.body+" / " +poem._id);

});
});


