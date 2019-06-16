$.getJSON("json/NikkiNacksProducts.json", function(data) {
	"use strict";
	var output = "<ol>";
	var products = {};
	products.productId= [];
	products.productName= [];
	products.productType= [];
	products.newRelease= [];
	products.productPrice= [];
	for (var i in data.products) {

		

		products.productId[i] = data.products[i].productId;
		products.productName[i] = data.products[i].productName;
		products.productType[i] = data.products[i].productType;
		products.newRelease[i] = data.products[i].newRelease;
		products.productPrice[i] = data.products[i].productPrice;



	}

	console.log(products);

});

