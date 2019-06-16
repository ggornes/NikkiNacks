"use strict";
var products = [{
		"productId": "001",
		"productName": "Oblivion",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "002",
		"productName": "Iron Man 3",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "003",
		"productName": "Monty Python's Meaning of Life",
		"productType": "Movie",
		"newRelease": false,
		"productPrice": 2.00
	},
	{
		"productId": "004",
		"productName": "Star Trek into Darkness",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "005",
		"productName": "i Robot",
		"productType": "Movie",
		"newRelease": false,
		"productPrice": 3.50
	},
	{
		"productId": "006",
		"productName": "Can't Hold Us (Macklemore)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.50
	},
	{
		"productId": "007",
		"productName": "Mirrors (Justin Timberlake)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.50
	},
	{
		"productId": "008",
		"productName": "Can't touch this (MC Hammer)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 1.50
	},
	{
		"productId": "009",
		"productName": "Spirit Got Lost (Mental as Anything)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 0.99
	},
	{
		"productId": "010",
		"productName": "Only Happy when it Rains (Garbage)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 0.99
	},
	{
		"productId": "011",
		"productName": "Bangarang (Skrillex)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 2.50
	},
	{
		"productId": "012",
		"productName": "Splinter (Savant)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.00
	},
	{
		"productId": "013",
		"productName": "Upgrade",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "014",
		"productName": "Kill Bill",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	}
	];

//var products = new Array();
var movies = new Array();
var songs = new Array();

function getProducts() {

	var j = 0;
	var k = 0;

	for (var i in products) {
		if (products[i].productType == "Movie") {
			movies.push(new Object());

			movies[j].productId= products[i].productId;
			movies[j].productName= products[i].productName;
			movies[j].productType= products[i].productType;
			movies[j].newRelease= products[i].newRelease;
			movies[j].productPrice= products[i].productPrice;
			movies[j].selection = false; //refresh on event
			movies[j].qty = 0.0;
			movies[j].poster = "";


			//products.push(movies[j]);

			j++;


		} else if (products[i].productType == "Song") {
			songs.push(new Object());

			songs[k].productId= products[i].productId;
			songs[k].productName= products[i].productName;
			songs[k].productType= products[i].productType;
			songs[k].newRelease= products[i].newRelease;
			songs[k].productPrice= products[i].productPrice;
			songs[k].selection = false; //refresh on event
			songs[k].qty = 0.0;
			songs[k].albumCover;

			//products.push(songs[k]);

			k++;

		}

		
		
	}
	getMore();
	
}



function renderHTML2(products) {

	var imdbStar = '<svg id="imdb-star" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">'
	                +'<path d="M0 0h24v24H0z" fill="none"></path>'
                +'<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>'
                +'<path d="M0 0h24v24H0z" fill="none"></path>'
            +'</svg>';

	var moviesOutput = "";
	var songsOutput = "";
	var j=0;
	var k=0;

	for (var i in products) {
		if (products[i].productType=="Movie") {
			moviesOutput+='<div class="movie"><div class="poster"><img src="'+products[i].poster+'"></div>'
						+'<div class="info">'
							+"<p class=movie-title><strong>"+products[i].omdb.Title+"</strong>"+"<span id=movie-year>"+ products[i].omdb.Year+"</span></p>"
							+"<p class=movie-director><strong>Director: </strong>"+products[i].omdb.Director+"</p>"
							+"<p class=movie-rated-genre>"+products[i].omdb.Rated+" | "+products[i].omdb.Genre+"</p>"
							+"<br>"
							+"<p class=movie-score><span id=imdb-score>"+imdbStar+" "+products[i].omdb.imdbRating+"</span><span id=metascore-score><strong>"+products[i].omdb.Metascore+"</strong></span> Metascore </p>"
							+"<br>"
							+"<p class=moviePlot><strong>Plot: </strong>"+products[i].omdb.Plot+"</p>"
							+"<br><br><br>"
							+"<p>Add to basket</p>"
						+"</div>"
						+"<div class=buttons><input type=checkbox name=movie value="+products[i].productPrice+">"
						+ "<input type=textbox name=movieQty><input type=button class=btn-add name=movieAdd value=+ onClick=movies_add_click(this.id) id="
						+j
						+"><input type=button name=movieRemove value=- class=btn-remove onClick=movies_remove_click(this.id) id="
						+j
						+"></div></div>";
			j++;
		} else if (products[i].productType=="Song") {
			songsOutput+='<div class="song"><div class="cover"><img src="'+products[i].almbumCover+'"></div>'
						+'<div class="info">'
							+"<p class=song-title><strong>"+products[i].spotify.tracks.items[0].name+"</strong>"+"<span id=song-year>"+ products[i].spotify.tracks.items[0].album.release_date.split("-")[0]+"</span></p>"
							+"<p class=song-artist>Artist name: <strong>"+products[i].spotify.tracks.items[0].artists[0].name+"</strong></p>"
							+"<p class=song-album>from Album: "+products[i].spotify.tracks.items[0].album.name
							+"<br>"
							+"<p class=song-popularity><span id=imdb-score>"+imdbStar+" "+products[i].spotify.tracks.items[0].popularity
							+"<br><br><br>"
							+"<p>Add to basket</p>"
						+"</div>"
						+"<div class=buttons><input type=checkbox name=song value="+products[i].productPrice+">"
						+ "<input type=textbox name=songQty><input type=button class=btn-add name=songAdd value=+ onClick=songs_add_click(this.id) id="
						+k
						+"><input type=button name=songRemove value=- class=btn-remove onClick=songs_remove_click(this.id) id="
						+k
						+"></div></div>";
			k++;
		}
	}


	document.getElementById("movies-list").innerHTML=moviesOutput;
	/*document.getElementById("songs-list").innerHTML=songsOutput;*/


}

window.onload = getProducts;

function getMore() {

		var promises = new Array();
		var jason = new Array();

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
			for (var i = 0; i<movies.length; i++) {
				jason.push(JSON.parse(promises[i].responseText));
				movies[i].omdb = jason[i];
				if (jason[i].Poster == "N/A") {
					movies[i].poster = "img/imageNA.jpg";
				} else {
					movies[i].poster = jason[i].Poster;
				}
				
			}
			console.log("promises done");
			renderHTML2(movies);
		}, function(e) {
     		console.log("fail",arguments);
		}). always (function(){
     		console.log("always",promises); // always call after all are completed.  Loop through them here.
		})

		
		



	}

	function refresh(){
	
	// array of movies and songs selected eckboxes elements
	var movieListSelected = document.getElementsByName("movie");
	var songListSelected = document.getElementsByName("song");

	// array of movies and songs selected input textbox elements
	var movieListQty = document.getElementsByName("movieQty");
	var songListQty = document.getElementsByName("songQty");


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

function getQuote2() {
	refresh();
	var total = 0;
	var output = "<h2>Quote</h2>";
	output+="<h3>List of selected items</h3>";
	output += "<ul>";
	for (var i in movies) {
		if(movies[i].selection==true){
			output+= "<li>" + movies[i].productType
			+ " | " +movies[i].productName + " | "
			+ movies[i].qty + "@$" + movies[i].productPrice
			+ " = $" +movies[i].qty*movies[i].productPrice
			+ "</li>";

			total+=movies[i].qty*movies[i].productPrice;
		}
	}

	for (var i in songs) {
		if(songs[i].selection==true){
			output+= "<li>" + songs[i].productType
			+ " | " +songs[i].productName + " | "
			+ songs[i].qty + "@$" + songs[i].productPrice
			+ " = $" +songs[i].qty*songs[i].productPrice
			+ "</li>";

			total+=songs[i].qty*songs[i].productPrice;
		}
	}

	output+="</ul>";
	output+="<p><strong>Total price </strong>$" + total +"</p>";
	output+="<input type=button name=print id=btnPrint value=PrintQuote>";
	document.getElementById("quote").innerHTML=output;


	// for printing only the quote div
	// https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage

	document.getElementById("btnPrint").addEventListener("click", function() {
		var prtContent = document.getElementById("quote");
		var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
		WinPrint.document.write(prtContent.innerHTML);
		WinPrint.document.close();
		WinPrint.focus();
		WinPrint.print();
		WinPrint.close();
	});

	// To read. To print to text file
	// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server


}


document.getElementById("myBtn").addEventListener("click", function() {
  getQuote2();
});




