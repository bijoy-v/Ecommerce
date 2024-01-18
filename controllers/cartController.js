const { error } = require("console");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const WishlistModel = require("../models/wishlistModel");

const cartpage = async (req, res, next)=> {
    try {
      //cart tems
      const userId =req.session.userId;

      const cartItems =await CartModel.find({
        user:userId
      }).populate("product").exec(); 
      console.log(cartItems);
    res.render("user/userCart",{title:"about",cartItems})
    } catch (error) {
      console.log(error);
    }
  }
  
  const wishlistpage = async (req, res, next)=> {
    try {
      //wiitem
      const userId =req.session.userId;
      const wishlistItems = await WishlistModel.find({
        user:userId
      }).populate("product").exec();
    res.render("user/userWishlist",{title:"wishlist",wishlistItems})
    } catch (error) {
      console.log(error);

    }
  }

  

const addCart = async (req,res,next)=>{
try {
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
     
    if(existWishList){
      throw Error("Already in wishlist")
    }
      const product =await ProductModel.findById(req.params.productId);
      const wishlistItem = await WishlistModel.create({
        user:req.session?.userId,
        product:product._id,
        totalPrice:product.price
      })


  } catch (error) {
    console.log(error);
    
  }
}

const incrementQuantity = async(req,res,)=>{
  try {
    const itemId = req.params.itemId;
    const cartItem = await CartModel.findById(itemId).populate("product").exec();
    const price = cartItem.product.price;
    await CartModel.findByIdAndUpdate(itemId,
      {
        $set:{
          $inc:{
            quantity:1,
            totalPrice:price
          }
        }
      }
      )
  } catch (error) {
    console.log(error)
  }
}

module.exports={
    addCart,wishlistpage,cartpage,addWishlist,incrementQuantity
}