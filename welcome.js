$(document).ready(function () {
	$.get("categories.json", function (result) {

		for (var categoryName of result) {
			var sub_category = '';
			for (var subCat of categoryName.sub_category) {
				sub_category += "<li  style='list-style-type: disc'><a  onClick= 'displayProduct($(this).text())'>" + subCat.category + "</a></li>";

			};

			var categories = "<li class=\"dropdown\"><a type=\"button\" data-toggle=\"collapse\">" + categoryName.category + "</a><ul class='sub-categories'>" + sub_category + "</ul></li>";
			$("#navCategories").append(categories);
		};

		$(".sub-categories").hide();
		$("#navCategories li").not($('#navCategories li sub-categories li a')).click(function () {
			$('ul.sub-categories').not($(this).children()).slideUp();
			$(this).children("ul.sub-categories").slideToggle();
		});

	});

	
	$.get("products.json", function (result) {

		for (var product of result) {

			var products =
				"<div class=\"col-lg-3\ col-md-4\ col-sm-6\ col-xs-12\"><div class=\"card\"><input type='image' src='" + product.image[0] +
				"' height=\"300px\" width=\"200px\" id='"+product.id+"' onclick='showProduct("+product.id+")'><h3 id='name'>" + product.name + "</h3><p id='price'>" + "Rs." +
				product.price + "</p></div><button class=\"btn btn-warning\" id='"+product.id+
				"' onclick='addToCart("+product.id+")'><span class='glyphicon glyphicon-shopping-cart'></span> Add to Cart</button>" +
				" " + "<button class=\"btn btn-success\" id='"+product.id+
				"' onclick='addToWishlist("+product.id+")'><span class='glyphicon glyphicon-heart'></span> Add to Wishlist</button><br><br></div></div>";

			$(".products").append(products);

		};	

	});
});


function displayProduct(subCat){
	$.get("products.json", function (data) {
		var subCategories = [];
		for ( var g of data) {
			
			if(g.sub_category == subCat){

				 subCategories.push(g);
				 
			}
		}
		console.log(subCategories);
		$(".sub-menu").empty();
		for (var p of subCategories){

			$(".container-fluid").css("display","none");
			
			var product =
				 "<div class=\"col-lg-3\ col-md-4\ col-sm-6\ col-xs-12\"><div class=\"card\"><input type='image' src='" + p.image[0] +
				 "' height=\"300px\" width=\"200px\" id='"+p.id+"' onclick='showProduct("+p.id+")'><h3 id='name'>" + p.name + 
				 "</h3><p id='price'>" + "Rs." +p.price + "</p></div><button class=\"btn btn-warning\" id='"+p.id+
				 "' onclick='addToCart("+p.id+")'><span class='glyphicon glyphicon-shopping-cart'></span>Add to Cart</button>"+
				 " " + "<button class=\"btn btn-success\" id='"+p.id+
				 "' onclick='addToWishlist("+p.id+")'><span class='glyphicon glyphicon-heart'></span>Add to Wishlist</button><br><br></div></div>";

				 
		
		$(".sub-menu").append(product);
		}

	});
}

function showProduct(id){
	$(".container-fluid").css("display","none");
	$.get("products.json", function (result) {

		for (var h of result) {
			if(h.id == id){
				console.log(id);
			var products =
				"<div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='"+ h.image[0]+
				"' height=\"500px\" width=\"300px\"><div class=\"item-desc\">  <table><tr><td><h2>Name</h2></td><td><h1>" + h.name + 
				"</h1></td></tr>  <tr><td><h2>Price</h2></td><td><h2 id='price'>" + "Rs." +
				h.price + "</h2></td></tr>  <tr><td><button class=\"btn btn-warning\" id='"+h.id+
				"' onclick='addToCart("+h.id+")'><span class='glyphicon glyphicon-shopping-cart'></span>Add to Cart</button>" +
				" " + "<button class=\"btn btn-success\" id='"+h.id+
				"' onclick='addToWishlist("+h.id+")'><span class='glyphicon glyphicon-heart'></span>Add to Wishlist</button></td></tr></table></div><//div</div>";

			
			}
		};	
		$(".sub-menu").css("display","none");
		$(".showProduct").append(products);
	});
}
