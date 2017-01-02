const db = require('./models/poemModel.js');
const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/PoemsDb");


// const seedPoems = [
// {
// 	"title":"fullStack",
// 	"poem":"five word full stack poem",
// 	"author":"Anonymous"
// },
// {
// 	"title":"Backend",
// 	"poem":"mongo mongoose monday my god",
// 	"author":"Anonymous"
// },
// {
// 	"title":"frontend",
// 	"poem":"are you angular I am",
// 	"author":"Anonymous"
// }];

db.remove({},function(err,questions){
  	db.create(seedPoems,function(err,poems){
  		if (err) {return console.log(err);}
  		console.log("created", seedPoems.length, "poems");
  		process.exit();

  	});
  });