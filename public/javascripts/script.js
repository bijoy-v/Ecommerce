function validation(){
    const username = document.getElementById("form3Example1cg").innerHTML
     
    const passWord = document.getElementById("form3Example4cg")


    // if(username.value ==""||passWord.value ==""){

    //     Enter the details.

    // }else{
        
    // }
}

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
        console.log('Item added to the cart:', data);
        // You can handle the response data or perform additional actions here
      })
      .catch(error => {
        console.error('Error adding item to the cart:', error);
        // Handle errors or display an error message to the user
      });
  }