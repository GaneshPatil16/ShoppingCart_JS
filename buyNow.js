
var total = 0;
var buy =[];
function buyNow(id){
	
	$.get("products.json", function (result) {

		for (var h of result) {
			if(h.id == id){
				
                price = Number(h.price);
                
                total = total+ price ;

                console.log(total);

         var product ="<h1>You have Purchased</h1><input type='image' src='"+
         h.image[0]+ "' height=\"150px\" width=\"100px\"><table> <tr><td><h4>Name :</h4></td><td><h4>" +
        h.name + "</h4></td></tr>  <tr><td><h4>Price :</h4></td><td><h4>" + "Rs." +
         h.price + "</h4></td></tr> <tr><td><h3>Total:</h3></td><td><h3>Rs."+total+"</h3></td></tr> </table><hr/>";
			
			}
        };	
        
        $(".container-fluid").css("display","none");
		$(".buyNow").append(product);
		
	});
}