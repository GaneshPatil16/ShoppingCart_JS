function validateUser() {
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    
        if(username=='ganesh' && password=='admin') {
            window.location.assign("welcome.html")
        }
        else {
           window.alert("Username or password is incorrect.")
        }
    }

   /* var cartItems = [];
$.get('.json',(data)=>{
    // cartItems
    for(var v of data){
        if(eval(v.id)==localStorage.getItem('cart'))
            cartItems.push(v);
    }
})
*/