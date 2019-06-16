// Global variables
var products = new Array();
var movies = new Array();
var songs = new Array();


function getProducts7() {

	var promise1 = $.getJSON("json/NikkiNacksProducts.json");

	//var movies = new Array();
	//var songs = new Array();
	//var productos = new Array();

	promise1.done(function(data) {

		var json = JSON.parse(promise1.responseText);
		var j = 0;
		var k = 0;

		for (var i in json.products) {
			if (json.products[i].productType == "Movie") {
				movies.push(new Object());

				movies[j].productId= json.products[i].productId;
				movies[j].productName= json.products[i].productName;
				movies[j].productType= json.products[i].productType;
				movies[j].newRelease= json.products[i].newRelease;
				movies[j].productPrice= json.products[i].productPrice;
				movies[j].selection = false; //refresh on event
				movies[j].qty = 0.0;
				movies[j].poster = "";


				products.push(movies[j]);

				j++;


			} else if (json.products[i].productType == "Song") {
				songs.push(new Object());

				songs[k].productId= json.products[i].productId;
				songs[k].productName= json.products[i].productName;
				songs[k].productType= json.products[i].productType;
				songs[k].newRelease= json.products[i].newRelease;
				songs[k].productPrice= json.products[i].productPrice;
				songs[k].selection = false; //refresh on event
				songs[k].qty = 0.0;

				products.push(songs[k]);

				k++;

			}

			
			
		}

/*

		for (var i in products) {
			console.log(products[i]);
		}
*/

		// We call the renderHTML() function to load the contents of the JSON file
		// into a placeholder on the body of the html
		renderHTML(products);


	});

	promise1.fail(function() {
		console.log("Error on loading JSON file");
	});

}




function getMore() {

	var promise = new Array();

	for (var i = 0; i<=movies.length-1; i++) {
		var j = 0;

		movies[i].omdbURL = "https://www.omdbapi.com/?apikey=156276c&t=";
		var movieTitle = movies[i].productName;
		var movieTitleArr = movieTitle.split(" ");

		if (movieTitleArr.length > 1){
			
			for (j=0; j < movieTitleArr.length - 1; j++) {
				movies[i].omdbURL+=movieTitleArr[j];
				movies[i].omdbURL+="+";
			}

			movies[i].omdbURL+=movieTitleArr[j];
		} 
		else {
			movies[i].omdbURL = "https://www.omdbapi.com/?apikey=156276c&t=" + movieTitle.split(" ");
		}



		console.log(movies[i].omdbURL);


		promise2 = $.getJSON(movies[i].omdbURL);

		promise2.done(function(data) {
			var jason = JSON.parse(promise2.responseText);
			console.log(jason.Poster);

		});

		promise2.fail(function() {
			console.log("Error on omdbapi request");
		});



	}


	


}

function getMore4() {

		var promises = new Array();
		jason = new Array();

		for (var i = 0; i<=movies.length-1; i++) {

			var j = 0;

			movies[i].omdbURL = "https://www.omdbapi.com/?apikey=156276c&t=";
			var movieTitle = movies[i].productName;
			var movieTitleArr = movieTitle.split(" ");

			if (movieTitleArr.length > 1){
			
			for (j=0; j < movieTitleArr.length - 1; j++) {
				movies[i].omdbURL+=movieTitleArr[j];
				movies[i].omdbURL+="+";
			}

			movies[i].omdbURL+=movieTitleArr[j];

			} 
			else {
				movies[i].omdbURL = "https://www.omdbapi.com/?apikey=156276c&t=" + movieTitle.split(" ");
			}

			promises[i] = $.getJSON(movies[i].omdbURL);

		}



		$.when.apply($, promises).then(function() {
			for (var i = 0; i<5; i++) {
				jason.push(JSON.parse(promises[i].responseText));
				movies[i].poster = jason[i].Poster;
			}
			console.log("promises done");
		}, function(e) {
     		console.log("fail",arguments);
		}). always (function(){
     		console.log("always",promises); // always call after all are completed.  Loop through them here.
		})
		



	}




function renderHTML(products) {

	var moviesOutput = "<p>Movies:</p><ol>";
	var songsOutput = "<p>Songs:</p><ol>";
	var j=0;
	var k=0;

	for (var i in products) {
		if (products[i].productType=="Movie") {
			moviesOutput+="<li><input type=checkbox name=movie value="+products[i].productPrice+">"
						+products[i].productName
						+ "  "
						+ "<input type=textbox name=movieQty><input type=button name=movieAdd value=+ class=add onClick=movies_add_click(this.id) id="
						+j
						+"><input type=button name=movieRemove value=- class=remove onClick=movies_remove_click(this.id) id="
						+j
						+"></li>";
			j++;
		} else if (products[i].productType=="Song"){
			songsOutput+="<li><input type=checkbox name=song value="+products[i].productPrice+">"
						+products[i].productName 
						+ "  "
						+ "<input type=textbox name=songQty><input type=button name=songAdd value=+ class=add onClick=songs_add_click(this.id) id="
						+k
						+"><input type=button name=songRemove value=- class=remove onClick=songs_remove_click(this.id) id="
						+k+
						"></li>";
			k++;
		}

	}

	moviesOutput+="</ol>"
	songsOutput+="</ol>"
	document.getElementById("movies-list").innerHTML=moviesOutput;
	document.getElementById("songs-list").innerHTML=songsOutput;


}


window.onload = getProducts7;



function refresh(){
	
	// array of movies and songs selected eckboxes elements
	movieListSelected = document.getElementsByName("movie");
	songListSelected = document.getElementsByName("song");

	// array of movies and songs selected input textbox elements
	movieListQty = document.getElementsByName("movieQty");
	songListQty = document.getElementsByName("songQty");


	// loop into the array and make the change in the movies and songs object array
	for (var i = 0; i<= movieListSelected.length-1; i++) {
		if (movieListSelected[i].checked) {
			movies[i].selection = true;
			movies[i].qty = parseInt(movieListQty[i].value);
		} else {
			movies[i].selection = false;
			movies[i].qty = 0;
		}
	}

	for (var i = 0; i<= songListSelected.length-1; i++) {
		if (songListSelected[i].checked) {
			songs[i].selection = true;
			songs[i].qty = parseInt(songListQty[i].value);
		} else {
			songs[i].selection = false;
			songs[i].qty = 0;
		}
	}


} // end of refresh() function


function movies_add_click(clicked_id)
{
	// the clicked_id parameter is the id of the "+" button named "movie" elements

	movies[clicked_id].qty +=1; // update the qty in the movies array of objects

	document.getElementsByName("movie")[clicked_id].checked = true; //set checkbox.checked to be true
	document.getElementsByName("movieQty")[clicked_id].value=movies[clicked_id].qty; //refresh textbox
}


function songs_add_click(clicked_id)
{

	/*
	if (songs[clicked_id].qty <= 0 && document.getElementsByName("song")[clicked_id].checked == false){
		document.getElementsByName("song")[clicked_id].checked = true;
	}
	*/

	songs[clicked_id].qty +=1;
	document.getElementsByName("song")[clicked_id].checked = true;
	document.getElementsByName("songQty")[clicked_id].value=songs[clicked_id].qty;

}



function movies_remove_click(clicked_id)
{
	if (movies[clicked_id].qty <= 0){		
		return;
	} else {
		movies[clicked_id].qty -=1;
		document.getElementsByName("movieQty")[clicked_id].value=movies[clicked_id].qty;
	}

    if (movies[clicked_id].qty <= 0) {
    	document.getElementsByName("movie")[clicked_id].checked = false;
    }
}


function songs_remove_click(clicked_id)
{
	if (songs[clicked_id].qty <= 0){
		return;
	} else {
		songs[clicked_id].qty -=1;
		document.getElementsByName("songQty")[clicked_id].value=songs[clicked_id].qty;
	}

	if (songs[clicked_id].qty <= 0) {
    	document.getElementsByName("song")[clicked_id].checked = false;
    }
}

function onCheckBoxClick() {

}

function test7() {

	refresh();

	console.log("QUOTE:")
	var j=1;
	var k=1;
	for (var i in movies) {
		
		if(movies[i].selection==true){
			console.log("Item Num: " + j 
						+ " Product Name: " + movies[i].productName
						+ " Price: " +movies[i].productPrice
						+ " Qty :" +movies[i].qty
						+ " Subtotal: " +movies[i].qty*movies[i].productPrice);
			j++;
		}
	}

	for (var i in songs) {

		if(songs[i].selection==true){
			console.log("Item Num: " + (k+j) 
						+ " Product Name: " + songs[i].productName
						+ " Price: " +songs[i].productPrice
						+ " Qty :" +songs[i].qty
						+ " Subtotal: " +songs[i].qty*songs[i].productPrice);
			k++;
		}
	}
}

function getQuote2() {
	refresh();
	var total = 0;
	var output = "<h2>Quote</h2>";
	output+="<h3>List of selected items</h3>";
	output += "<ol>";
	for (var i in movies) {
		if(movies[i].selection==true){
			output+= "<li> Product Type: " + movies[i].productType
			+ " Product Name: " +movies[i].productName
			+ " Price: " +movies[i].productPrice
			+ " Qty :" +movies[i].qty
			+ " Subtotal: " +movies[i].qty*movies[i].productPrice
			+ "</li>";

			total+=movies[i].qty*movies[i].productPrice;
		}
	}

	for (var i in songs) {
		if(songs[i].selection==true){
			output+= "<li> Product Type: " + songs[i].productType
			+ "Product Name" +songs[i].productName
			+ " Price: " +songs[i].productPrice
			+ " Qty :" +songs[i].qty
			+ " Subtotal: " +songs[i].qty*songs[i].productPrice
			+ "</li>";

			total+=songs[i].qty*songs[i].productPrice;
		}
	}

	output+="</ol>";
	output+="<p><strong>Total price </strong>$" + total +"</p>";
	output+="<input type=button name=print value=PrintQuote>";
	document.getElementById("quote").innerHTML=output;
}


document.getElementById("myBtn").addEventListener("click", function() {
  getQuote2();
});