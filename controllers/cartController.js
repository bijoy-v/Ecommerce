const { error } = require("console");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const WishlistModel = require("../models/wishlistModel");

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
  console.log(req.session);
  const exist = await CartModel.findOne({
    $and:[
      {user:req.session.userId},
      {product:req.params.productId}
    ]
  })
  if(exist){
    throw Error("Already in cart")
  }
    const product =await ProductModel.findById(req.params.productId);
    const cartItem = await CartModel.create({
      user:req.session?.userId,
      product:product._id,
      totalPrice:product.price
    })
    console.log(cartItem);
    
} catch (error) {
    console.log(error);
    
}
}
const addWishlist = async(req,res,next)=>{
  try {
    const existWishList = await WishlistModel.findOne({
    $and:[
      {user:req.session.userId},
        {product:req.params.productId}
    ]
  })
    console.log(existWishList)
     
    if(existWishList){
      throw Error("Already in wishlist")
    }
      const product =await ProductModel.findById(req.params.productId);
      const wishlistItem = await WishlistModel.create({
        user:req.session?.userId,
        product:product._id,
        totalPrice:product.price
      })
      console.log(wishlistItem);


  } catch (error) {
    console.log(error);
    
  }
}

module.exports={
    addCart,wishlistpage,cartpage,addWishlist
}