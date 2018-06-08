var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');



var products =[ 
	new Product({
		imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title:'Gothic Video Game',
		description:'Awesome Game!!!',
		price: 10
	}),

	new Product({
		imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title:'Warfare Video Game',
		description:'Excellent Game!!!',
		price: 20
	}),

	new Product({
		imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title:'Counterstrike Video Game',
		description:'Superb Game!!!',
		price: 30
	}),

	new Product({
		imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title:'Chekers Video Game',
		description:'Classic Game!!!',
		price: 50
	})
	
	
	];

var done=0;
for(var i=0;i<products.length;i++)
{
	products[i].save(function(err,result){
		done++;
		if(done===products.length)
		{
			exit();
		}

	});
}

function exit(){
	mongoose.disconnect();
}