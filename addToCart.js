var wishlist =[];
function addToCart(id){
    
	
	$.get("products.json", function (result) {

		for (var h of result) {
			if(h.id == id){
				//console.log(id);
				wishlist.push(id);
				//console.log(wishlist);
			var product =
                " <div class='modal-body'><div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='"+
                 h.image[0]+ "' height=\"500px\" width=\"300px\"><div class=\"item-desc\">  <table><tr><td><h3>Name :</h3></td><td><h3>" +
                h.name + "</h1></td></tr>  <tr><td><h3>Price :</h3></td><td><h3>" + "Rs." +
                h.price + "</h3></td></tr> <tr><td style='padding:15px'><button class='btn btn-danger' id='"+h.id+
				"' onclick='remove("+h.id+")'>Remove from Cart</button></td><td style='padding:15px'><button class='btn btn-success' id='"+h.id+
				"' onclick='buyNow("+h.id+")'>Buy Now</button></td></tr> </table></div><//div</div></div>";

			
			}
		};	
		
		$(".modal1").append(product);
	});
}


function addToWishlist(id){
	
	$.get("products.json", function (result) {
		
		for (var h of result) {
			if(h.id == id){
				//console.log(id);
				wishlist.push(id);
				console.log(wishlist);
				
			var product =
                " <div class='modal-body'><div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='"+
                 h.image[0]+ "' height=\"500px\" width=\"300px\"><div class=\"item-desc\">  <table><tr><td><h3>Name :</h3></td><td><h3>" +
                h.name + "</h1></td></tr>  <tr><td><h3>Price :</h3></td><td><h3 id='price'>" + "Rs." +
                h.price + "</h3></td></tr> <tr><td style='padding:15px'><button class='btn btn-danger' id='"+h.id+
				"' onclick='remove("+h.id+")' >Remove from Wishlist</button></td><td style='padding:15px'><button class='btn btn-success' id='"+h.id+
				"' onclick='buyNow("+h.id+")'>Buy Now</button></td></tr> </table></div><//div</div></div>";

			
			}
		};	

		
		$(".modal2").append(product);
		
	});
}


function remove(id){
	// for(var d of wishlist){
	wishlist.splice(0, 1);
	console.log(wishlist);
	
	// }
	}
