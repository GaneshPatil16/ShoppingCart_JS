var wishlist = [];

/************************** This function is used to add products to the cart when we click on "Add to cart" button ***************************/

function addToCart(id) {
	$.get("products.json", function (result) {

		for (var h of result) {
			if (h.id == id) {
				//console.log(id);
				wishlist.push(id);
				//console.log(wishlist);
			}
			for (var g of wishlist) {
				if (g == h.id) {
					var product =
						" <div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='" +
						h.image[0] + "' height=\"500px\" width=\"300px\"><div class=\"item-desc\">  <table><tr><td><h3>Name :</h3></td><td><h3>" +
						h.name + "</h1></td></tr>  <tr><td><h3>Price :</h3></td><td><h3>" + "Rs." +
						h.price + "</h3></td></tr> <tr><td style='padding:15px'><button class='btn btn-danger' id='" + h.id +
						"' onclick='remove(" + h.id + ")'>Remove from Cart</button></td><td style='padding:15px'><button class='btn btn-success' id='" + h.id +
						"' onclick='buyNow(" + h.id + ")'>Buy Now</button></td></tr> </table></div><//div</div>";

				}
			}
		};

		$(".cart").append(product);
		$(".cart").css("display", "none");

	});
}


/********************** This function is used to remove products from the cart when we click on "Remove from cart" button *********************/


function remove(id) {
	for (var d=0; d<wishlist.length;d++) {
		if(wishlist[d] == id){
		wishlist.splice(d,1);
		console.log(wishlist);
		$(".cart").empty();
		}
	}

	$.get("products.json", function (result) {

		for (var h of result) {
			for (var w of wishlist) {
				if (w == h.id) {
					var product =
						" <div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='" +
						h.image[0] + "' height=\"500px\" width=\"300px\"><div class=\"item-desc\">  <table><tr><td><h3>Name :</h3></td><td><h3>" +
						h.name + "</h1></td></tr>  <tr><td><h3>Price :</h3></td><td><h3>" + "Rs." +
						h.price + "</h3></td></tr> <tr><td style='padding:15px'><button class='btn btn-danger' id='" + h.id +
						"' onclick='remove(" + h.id + ")'>Remove from Cart</button></td><td style='padding:15px'><button class='btn btn-success' id='" + h.id +
						"' onclick='buyNow(" + h.id + ")'>Buy Now</button></td></tr> </table></div><//div</div>";
						$(".cart").append(product);
				}
			}

		}
	});
}
