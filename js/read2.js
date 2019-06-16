$.getJSON("json/NikkiNacksProducts.json", function(data) {
	"use strict";
	var output = "<ol>";
	for (var i in data.products) {

		var productId = data.products[i].productId;
		var productName = data.products[i].productName;
		var productType = data.products[i].productType;
		var newRelease = data.products[i].newRelease;
		var productPrice = data.products[i].productPrice;

		if (productType=="Movie") {
			output+="<li><input type=checkbox name=movie value="+productId+">"+productName+ "<input type=textbox name=qty></li>";
		}

	}
	output+="</ol>"
	document.getElementById("movie-list").innerHTML=output;

});

