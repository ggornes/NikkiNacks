var products = new Array();

function getProducts() {
    alert('getProducts');

	/*let productsPromise = new Promise((resolve, reject) => {

		resolve(getProducts());


    });

    productsPromise.then((sucessMessage) => {
    	//console.log("AWEBOO!! " + sucessMessage[0]);
    })*/


    $.getJSON("json/NikkiNacksProducts.json", function(data) {
	"use strict";

// store products from json on an array of objects [{},...,{}] named products

	//var products2 = JSON.parse(data.products[1]);
	//console.log(products2);
	

	for (var i in data.products) {
			products.push(new Object());

			products[i].productId= data.products[i].productId;
			products[i].productName= data.products[i].productName;
			products[i].productType= data.products[i].productType;
			products[i].newRelease= data.products[i].newRelease;
			products[i].productPrice= data.products[i].productPrice;
			products[i].selected = false; //refresh on event

			console.log(products[i]);

	}
	renderHTML(products); //is working
	return products;
});
}

window.onload = getProducts;


function getProducts2(){

	alert('getProducts2');

	var promise1 = $.getJSON("json/NikkiNacksProducts.json");



	promise1.done(function(data) {
		
		var products = new Array();

		for (var i in data.products) {
			
			products.push(new Object());

			products[i].productId= data.products[i].productId;
			products[i].productName= data.products[i].productName;
			products[i].productType= data.products[i].productType;
			products[i].newRelease= data.products[i].newRelease;
			products[i].productPrice= data.products[i].productPrice;
			products[i].selected = false; //refresh on event

			//console.log(products[i]);

		}
		//renderHTML(products); //is working

	});

	promise1.fail(function() {
		console.log("Error al recibiv");
	});

	return products;
}






// render html from array

function renderHTML(products) {

	var moviesOutput = "<p>Movies:</p><ol>";
	var songsOutput = "<p>Songs:</p><ol>";

	for (var i in products) {
		if (products[i].productType=="Movie") {
			moviesOutput+="<li><input type=checkbox name=movie value="+products[i].productPrice+">"+products[i].productName + "  " + "<input type=textbox name=qty></li>";
		} else if (products[i].productType=="Song"){
			songsOutput+="<li><input type=checkbox name=song value="+products[i].productPrice+">"+products[i].productName + "  " + "<input type=textbox name=qty></li>";
		}

	}

	moviesOutput+="</ol>"
	songsOutput+="</ol>"
	document.getElementById("movies-list").innerHTML=moviesOutput;
	document.getElementById("songs-list").innerHTML=songsOutput;

	//return products;
}







function test() {
	alert("AAAA");
	var Movies = new Array();
	var Songs = new Array();
	var myMovies = new Array();
	var mySongs = new Array();
	var j = 0;
	var k = 0;

	Movies = document.getElementsByName("movie");
	Songs = document.getElementsByName("song");

	for (var i in Movies) {
		if (Movies[i].checked == true){
			myMovies[j] = Movies[i];
			j++;

		}
	}

	for (var i in Songs) {
		if (Songs[i].checked == true){
			mySongs[k] = Songs[i];
			k++;

		}
	}



	return false;
}

function test2() {


	var productos = getProducts2();

	renderHTML(productos);
	
	console.log(productos[0].productName);

	/*

	productos.done(function(datoss) {
		for(var i in datoss.products) {
			console.log(datoss.products[i].productName);
		}
	});

	console.log(productos[0]);
	*/



/*

	var promise1 = $.getJSON("json/NikkiNacksProducts.json");
	promise1.done(function(data) {
		
		var products = new Array();

		for (var i in data.products) {
				products.push(new Object());

				products[i].productId= data.products[i].productId;
				products[i].productName= data.products[i].productName;
				products[i].productType= data.products[i].productType;
				products[i].newRelease= data.products[i].newRelease;
				products[i].productPrice= data.products[i].productPrice;
				products[i].selected = false; //refresh on event

				console.log(products[i]);

		}
		//renderHTML(products); is working
		return products;




	});

	promise1.fail(function() {
		console.log("Error al recibiv");
	});

*/



}



