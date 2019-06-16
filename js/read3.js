$.getJSON("json/NikkiNacksProducts.json", function(data) {
	"use strict";

// store products from json on an array of objects [{},...,{}] named products

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

	//return products;


// render html from array

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

	return products;

});






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
	alert("Testing 2");

	var Movies, Songs = new Array();
	//var Songs = new Array();
	//var myMovies = new Array();
	//var mySongs = new Array();
	var j = 0;
	var k = 0;

	Movies = document.getElementsByName("movie");
	Songs = document.getElementsByName("song");

	for (var i in Movies) {
		if (Movies[i].checked == true) {
			//myMovies[j] = Movies[i];
			products[i].selected = true;
			j++;

		}
	}

	for (var i in products) {
		console.log(products[i].productName);
	}



	return products;
}



