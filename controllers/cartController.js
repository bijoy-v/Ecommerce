const cartpage =(req, res, next)=> {
    try {
    res.render("user/userCart",{title:"about",})
    } catch (error) {
      console.log(error);
    }
  }
  
  const wishlistpage =(req, res, next)=> {
    try {
    res.render("user/userWishlist",{title:"about",layout:"layouts/layout"})
    } catch (error) {
      console.log(error);
      
    }
  }


const addCart = async (req,res,next)=>{
try {
    console.log(req.params);
    
} catch (error) {
    console.log(error);
    
}
}

module.exports={
    addCart,wishlistpage,cartpage
}