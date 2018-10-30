
var total = 0;
var buy =[];

/*************************** This function is used for purchasing that product when we click on "Buy Now" button ****************************/
function buyNow(id){
	
	$.get("products.json", function (result) {

		for (var h of result) {
			if(h.id == id){
				
                price = Number(h.price);
                
                total = total+ price ;

                console.log(total);

         var product ="<div class='modal-body'><div class=\"cart-list\"><div class=\"cart-item\"><input type='image' src='"+
         h.image[0]+ "' height=\"200px\" width=\"150px\"><table> <tr><td><h4>Name :</h4></td><td><h4>" +
        h.name + "</h4></td></tr>  <tr><td><h4>Price :</h4></td><td><h4>" + "Rs." +
         h.price + "</h4></td></tr> <tr><td><h3>Total:</h3></td><td><h3>Rs."+total+"</h3></td></tr> </table></div</div></div><hr/>";
			
			}
        };	
        
        $(".buyNow").append(product);
	});
}

/********************************** This function is used to show a Home page when "Home" button is clicked **********************************/

function showDiv1(){
    $(".btn1").click(function(){
        $(".container-fluid").show();
    });
    
    $(".sub-menu").css("display","none");
    $(".showProduct ").css("display","none");
    $(".cart").css("display","none");
}

/*********************************** This function is used to show a cart when "Cart" button is clicked **************************************/

function showDiv2(){
    $(".btn2").click(function(){
        $(".cart").show();
    });

    $(".container-fluid").css("display","none");
    $(".sub-menu").css("display","none");
    $(".showProduct ").css("display","none");
    $(".images").css("display","none");
}
