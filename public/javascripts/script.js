// function validation(){
//     const username = document.getElementById("form3Example1cg").innerHTML
     
//     const passWord = document.getElementById("form3Example4cg")


//     if(username.value ""||passWord.value ==""){

//         Enter the details.

//     }else{
        
//     }
// }

function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview');
  
    var reader = new FileReader();
    reader.onload = function() {
      preview.src = reader.result;
      preview.style.display = 'block';
    };
  
    if (input.files && input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
  }

  function addToCart(productId){
    fetch("/add-cart/"+productId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add item to the cart');
        }
        return response.json();
      })
      .then(data => {
        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the cart:', error);
        // Handle errors or display an error message to the user
      });
  }

  function addToWishlist(productId){
    fetch("/add-wishlist/"+productId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add item to the wishlist');
        }
        return response.json();
      })
      .then(data => {
        console.log('Item added to the wishlist:', data);
        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the wishlist:', error);
        // Handle errors or display an error message to the user
      });
  }

  function incQty(_id){
    fetch("/incrementQty/"+_id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API  
        },
        
      })
      
      .then((response) => {
        console.log(response.data);
       
        if (!response.ok) {
          throw new Error('error in script');
        }
        return response.json();
      })
      .then(response => {
        console.log(response,"erfwerff")
        document.getElementById(_id).innerHTML = response.data
      })
      .catch(error => {
        console.error('', error);
      });
  }
  function decQty(_id){
    fetch("/decrementQty/"+_id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error('error in script');
        }
        return response.json();
      })
      .then(response => {
        console.log(response,"res");
        console.log('response', response.data);
        if(response.data){
          document.getElementById(_id).innerHTML = response.data.quantity
        }else{
          alert("product deleted")
            window.location.href = "/cart";
        }
       

        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('', error);
        // Handle errors or display an error message to the user
      });
  }



  function deleteCart(_id){
    console.log(_id);
    fetch("/deleteCartitem/"+_id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed');
        }
        return response.json();
      })
      .then(response => {
        document.getElementById(_id).innerHTML = response.data

        if(response.data){
          document.getElementById(_id).innerHTML = response.data.quantity
        }else{
          alert("product deleted")
            window.location.href = "/cart";
        }

        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the cart:', error);
        // Handle errors or display an error message to the user
      });
  }
  function listAddress(){
    fetch("/list-address/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add item to the wishlist');
        }
        return response.json();
      })
      .then(data => {
        console.log('Item added to the wishlist:', data);
        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the wishlist:', error);
        // Handle errors or display an error message to the user
      });
  }

 
  // ----------------------------------------------------------
    
  function logoutButton(){
    fetch("/logOut", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      })
      .then(response => {
        console.log(response,"response");
        if (!response.ok) {
          throw new Error('Failed to add item to the wishlist');
        }
        window.location.href = "/";
        return response.json();
      })
      .then(data => {
        console.log('Item added to the wishlist:', data);
        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the wishlist:', error);
        // Handle errors or display an error message to the user
      });
  }