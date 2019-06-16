var products = new Array();

function getProducts() {


    $.getJSON("json/NikkiNacksProducts.json", function(data) {
	"use strict";


// store products from json on an array of objects [{},...,{}] named products
	

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
	//renderHTML(products); //is working
	return products;
});
}

//window.onload = getProducts;


function getProducts2(){

	var promise1 = $.getJSON("json/NikkiNacksProducts.json");


	promise1.done(function(data) {
		
		//var products = new Array();

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
		renderHTML(products); //is working
		//return products;

	});

	promise1.fail(function() {
		console.log("Error al recibiv");
	});

	return products;
}





function getProducts3(){

	var promise1 = $.getJSON("json/NikkiNacksProducts.json");


	promise1.done(function(data) {
		
		var json = JSON.parse(promise1.responseText);

		console.log(json.products[0]);

		

		for (var i in data.products) {
			
			products.push(new Object());

			products[i].productId= json.products[i].productId;
			products[i].productName= json.products[i].productName;
			products[i].productType= json.products[i].productType;
			products[i].newRelease= json.products[i].newRelease;
			products[i].productPrice= json.products[i].productPrice;
			products[i].selected = false; //refresh on event

			//console.log(products[i]);

		}
		



		renderHTML(products); //is working
		return json;

	});

	promise1.fail(function() {
		console.log("Error al recibiv");
	});

	//return json.products;
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


	var productos = getProducts();
	renderHTML(productos);

	//renderHTML(productos);

	for (var i in productos) {
		console.log(productos[i].productName);
		//productos[i]
	}
	
	//console.log(productos[0].productName);

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



function test3() {

	objetosMovie = document.getElementsByName("movie");
	objetosMovie2 = document.getElementsByName("qty");
	var peliculas = new Array();

	for (var i=0; i<objetosMovie.length; i++) {
		peliculas.push(new Object());

		peliculas[i].precio = objetosMovie[i].value;
		peliculas[i].cantidad = objetosMovie2.value;
		peliculas[i].quiere = objetosMovie[i].checked;
	}
	return peliculas;
}



